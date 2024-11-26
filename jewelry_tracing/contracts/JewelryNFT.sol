// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "./AccessControl.sol";

contract JewelryNFT is ERC721URIStorage, JewelryAccessControl {
    uint256 private _tokenIds;

    enum JewelryState { 
        Mined,      // 0: 原石开采
        Cut,        // 1: 切割打磨
        Certified,  // 2: 认证
        InStock,    // 3: 入库
        Designed,   // 4: 设计完成
        Sold        // 5: 售出
    }

    struct JewelryItem {
        uint256 tokenId;
        JewelryState state;
        string uniqueId;      // 激光雕刻ID
        address currentOwner;
        uint256 timestamp;
        string ipfsHash;      // 详细信息的IPFS哈希
    }

    mapping(uint256 => JewelryItem) public jewelryItems;
    mapping(string => bool) public usedUniqueIds;

    event JewelryStateChanged(
        uint256 indexed tokenId,
        JewelryState newState,
        address indexed actor,
        uint256 timestamp
    );

    constructor() ERC721("JewelryNFT", "JWL") {}

    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC721URIStorage, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function mintJewelry(
        address to,
        string memory uniqueId,
        string memory ipfsHash
    ) public returns (uint256) {
        require(hasRole(MINER_ROLE, msg.sender), "Caller is not a miner");
        require(!usedUniqueIds[uniqueId], "UniqueId already exists");

        _tokenIds++;
        uint256 newTokenId = _tokenIds;

        _mint(to, newTokenId);
        _setTokenURI(newTokenId, ipfsHash);

        jewelryItems[newTokenId] = JewelryItem({
            tokenId: newTokenId,
            state: JewelryState.Mined,
            uniqueId: uniqueId,
            currentOwner: to,
            timestamp: block.timestamp,
            ipfsHash: ipfsHash
        });

        usedUniqueIds[uniqueId] = true;

        emit JewelryStateChanged(newTokenId, JewelryState.Mined, msg.sender, block.timestamp);

        return newTokenId;
    }

    function updateJewelryState(uint256 tokenId, JewelryState newState) public {
        require(_ownerOf(tokenId) != address(0), "Token does not exist");
        require(hasRole(MINER_ROLE, msg.sender) || 
                hasRole(CUTTER_ROLE, msg.sender) ||
                hasRole(LAB_ROLE, msg.sender) ||
                hasRole(JEWELER_ROLE, msg.sender), 
                "Caller is not authorized");

        JewelryItem storage item = jewelryItems[tokenId];
        item.state = newState;
        item.timestamp = block.timestamp;

        emit JewelryStateChanged(tokenId, newState, msg.sender, block.timestamp);
    }

    function getJewelryItem(uint256 tokenId) public view returns (JewelryItem memory) {
        require(_ownerOf(tokenId) != address(0), "Token does not exist");
        return jewelryItems[tokenId];
    }
} 
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./JewelryNFT.sol";
import "./CertificateRegistry.sol";

contract SupplyChain is JewelryAccessControl {
    JewelryNFT public jewelryNFT;
    CertificateRegistry public certificateRegistry;

    struct SupplyChainRecord {
        uint256 timestamp;
        address actor;
        string action;
        string details;
    }

    mapping(uint256 => SupplyChainRecord[]) public supplyChainHistory;

    event SupplyChainEvent(
        uint256 indexed tokenId,
        address indexed actor,
        string action,
        string details,
        uint256 timestamp
    );

    constructor(address _jewelryNFT, address _certificateRegistry) {
        jewelryNFT = JewelryNFT(_jewelryNFT);
        certificateRegistry = CertificateRegistry(_certificateRegistry);
    }

    function addSupplyChainRecord(
        uint256 tokenId,
        string memory action,
        string memory details
    ) public {
        require(
            hasRole(MINER_ROLE, msg.sender) ||
            hasRole(CUTTER_ROLE, msg.sender) ||
            hasRole(LAB_ROLE, msg.sender) ||
            hasRole(JEWELER_ROLE, msg.sender),
            "Caller is not authorized"
        );

        SupplyChainRecord memory record = SupplyChainRecord({
            timestamp: block.timestamp,
            actor: msg.sender,
            action: action,
            details: details
        });

        supplyChainHistory[tokenId].push(record);

        emit SupplyChainEvent(
            tokenId,
            msg.sender,
            action,
            details,
            block.timestamp
        );
    }

    function getSupplyChainHistory(uint256 tokenId) 
        public 
        view 
        returns (SupplyChainRecord[] memory) 
    {
        return supplyChainHistory[tokenId];
    }

    function transferJewelry(
        uint256 tokenId,
        address to,
        string memory details
    ) public {
        require(
            jewelryNFT.ownerOf(tokenId) == msg.sender,
            "Caller is not the owner"
        );

        jewelryNFT.transferFrom(msg.sender, to, tokenId);
        
        addSupplyChainRecord(
            tokenId,
            "TRANSFER",
            details
        );
    }

    // 辅助函数，用于验证珠宝的完整供应链
    function verifySupplyChain(uint256 tokenId) 
        public 
        view 
        returns (
            bool hasMiningRecord,
            bool hasCuttingRecord,
            bool hasCertification,
            bool hasDesignRecord
        ) 
    {
        SupplyChainRecord[] memory history = supplyChainHistory[tokenId];
        
        for (uint256 i = 0; i < history.length; i++) {
            if (hasRole(MINER_ROLE, history[i].actor)) {
                hasMiningRecord = true;
            } else if (hasRole(CUTTER_ROLE, history[i].actor)) {
                hasCuttingRecord = true;
            } else if (hasRole(LAB_ROLE, history[i].actor)) {
                hasCertification = true;
            } else if (hasRole(JEWELER_ROLE, history[i].actor)) {
                hasDesignRecord = true;
            }
        }
    }
} 
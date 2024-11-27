// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./CertificateManager.sol";

contract OwnershipManager is CertificateManager {
    struct Ownership {
        string ownerId;
        uint256 transactionDate;
    }

    mapping(string => Ownership[]) internal ownerships;

    event OwnershipTransferred(string certificateId, string from, string to);

    function transferOwnership(string memory certificateId, string memory newOwnerId) public {
        require(bytes(certificates[certificateId].certificateId).length != 0, "Certificate does not exist");

        Ownership memory newOwnership = Ownership({
            ownerId: newOwnerId,
            transactionDate: block.timestamp
        });

        ownerships[certificateId].push(newOwnership);

        emit OwnershipTransferred(certificateId, ownerships[certificateId][ownerships[certificateId].length - 1].ownerId, newOwnerId);
    }

    function getOwnershipHistory(string memory certificateId) public view returns (Ownership[] memory) {
        require(bytes(certificates[certificateId].certificateId).length != 0, "Certificate does not exist");
        return ownerships[certificateId];
    }
}

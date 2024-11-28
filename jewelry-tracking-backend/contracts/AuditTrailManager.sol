// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./CertificateManager.sol";

contract AuditTrailManager is CertificateManager {
    struct AuditTrail {
        string actorId;
        string uniqueId;
        string batchCode;
        string role;
        uint256 timestamp;
    }

    mapping(string => AuditTrail[]) internal auditTrails;

    event AuditTrailAdded(
        string actorId,
        string uniqueId,
        string batchCode,
        string role
    );

    function addAuditTrail(
        string memory actorId,
        string memory uniqueId,
        string memory batchCode,
        string memory role
    ) public {
        AuditTrail memory newAuditTrail = AuditTrail({
            actorId: actorId,
            uniqueId: uniqueId,
            batchCode: batchCode,
            role: role,
            timestamp: block.timestamp
        });

        auditTrails[uniqueId].push(newAuditTrail);

        emit AuditTrailAdded(actorId, uniqueId, batchCode, role);
    }

    function getAuditTrails(
        string memory uniqueId
    ) public view returns (AuditTrail[] memory) {
        return auditTrails[uniqueId];
    }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./CertificateManager.sol";

contract AuditTrailManager is CertificateManager {
    struct Participant {
        string id;
        string name;
        string role;
    }

    struct AuditTrail {
        Participant participant;
        string action;
        uint256 timestamp;
    }

    mapping(string => AuditTrail[]) internal auditTrails;

    event AuditTrailAdded(
        string certificateId,
        string action,
        string participantId
    );

    function addAuditTrail(
        string memory certificateId,
        string memory participantId,
        string memory participantName,
        string memory participantRole,
        string memory action
    ) public {
        require(
            bytes(certificates[certificateId].id).length != 0,
            "Certificate does not exist"
        );

        AuditTrail memory newAuditTrail = AuditTrail({
            participant: Participant({
                id: participantId,
                name: participantName,
                role: participantRole
            }),
            action: action,
            timestamp: block.timestamp
        });

        auditTrails[certificateId].push(newAuditTrail);

        emit AuditTrailAdded(certificateId, action, participantId);
    }

    function getAuditTrails(
        string memory certificateId
    ) public view returns (AuditTrail[] memory) {
        require(
            bytes(certificates[certificateId].id).length != 0,
            "Certificate does not exist"
        );
        return auditTrails[certificateId];
    }
}

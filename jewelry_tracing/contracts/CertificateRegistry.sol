// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./AccessControl.sol";

contract CertificateRegistry is JewelryAccessControl {
    struct Certificate {
        uint256 jewelryId;
        string certificateHash;  // IPFS hash of the certificate
        address issuer;
        uint256 timestamp;
        bool isValid;
    }

    mapping(uint256 => Certificate[]) public certificates;
    
    event CertificateIssued(
        uint256 indexed jewelryId,
        string certificateHash,
        address indexed issuer,
        uint256 timestamp
    );

    event CertificateRevoked(
        uint256 indexed jewelryId,
        string certificateHash,
        address indexed revoker,
        uint256 timestamp
    );

    function issueCertificate(
        uint256 jewelryId,
        string memory certificateHash
    ) public {
        require(
            hasRole(LAB_ROLE, msg.sender) || 
            hasRole(JEWELER_ROLE, msg.sender),
            "Caller is not authorized to issue certificates"
        );

        certificates[jewelryId].push(Certificate({
            jewelryId: jewelryId,
            certificateHash: certificateHash,
            issuer: msg.sender,
            timestamp: block.timestamp,
            isValid: true
        }));

        emit CertificateIssued(
            jewelryId,
            certificateHash,
            msg.sender,
            block.timestamp
        );
    }

    function revokeCertificate(
        uint256 jewelryId,
        uint256 certificateIndex
    ) public {
        require(
            hasRole(LAB_ROLE, msg.sender) || 
            hasRole(JEWELER_ROLE, msg.sender),
            "Caller is not authorized to revoke certificates"
        );
        
        require(certificateIndex < certificates[jewelryId].length, "Certificate does not exist");
        Certificate storage cert = certificates[jewelryId][certificateIndex];
        require(cert.isValid, "Certificate is already revoked");
        require(cert.issuer == msg.sender, "Only issuer can revoke certificate");

        cert.isValid = false;

        emit CertificateRevoked(
            jewelryId,
            cert.certificateHash,
            msg.sender,
            block.timestamp
        );
    }

    function getCertificates(uint256 jewelryId) public view returns (Certificate[] memory) {
        return certificates[jewelryId];
    }

    function getValidCertificates(uint256 jewelryId) public view returns (Certificate[] memory) {
        Certificate[] memory allCerts = certificates[jewelryId];
        uint256 validCount = 0;
        
        // Count valid certificates
        for (uint256 i = 0; i < allCerts.length; i++) {
            if (allCerts[i].isValid) {
                validCount++;
            }
        }
        
        // Create array of valid certificates
        Certificate[] memory validCerts = new Certificate[](validCount);
        uint256 currentIndex = 0;
        
        for (uint256 i = 0; i < allCerts.length; i++) {
            if (allCerts[i].isValid) {
                validCerts[currentIndex] = allCerts[i];
                currentIndex++;
            }
        }
        
        return validCerts;
    }
} 
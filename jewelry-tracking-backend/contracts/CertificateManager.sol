// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CertificateManager {
    struct Certificate {
        string certificateId;
        string uniqueId;
        string batchCode;
        string state;
        string price;
        string description;
        uint256 productionDate;
        string signature;
    }

    mapping(string => Certificate) internal certificates;

    // 声明事件 CertificateCreated
    event CertificateCreated(
        string certificateId,
        string uniqueId,
        string batchCode,
        string state,
        string price,
        string description,
        uint256 productionDate,
        string signature
    );

    function createCertificate(
        string memory certificateId,
        string memory uniqueId,
        string memory batchCode,
        string memory state,
        string memory price,
        string memory description,
        uint256 productionDate,
        string memory signature
    ) public {
        require(
            bytes(certificates[certificateId].certificateId).length == 0,
            "Certificate already exists"
        );

        certificates[certificateId] = Certificate({
            certificateId: certificateId,
            uniqueId: uniqueId,
            batchCode: batchCode,
            state: state,
            price: price,
            description: description,
            productionDate: productionDate,
            signature: signature
        });

        // 触发事件，将数据广播给链下
        emit CertificateCreated(
            certificateId,
            uniqueId,
            batchCode,
            state,
            price,
            description,
            productionDate,
            signature
        );
    }

    function getCertificate(
        string memory certificateId
    ) public view returns (Certificate memory) {
        require(
            bytes(certificates[certificateId].certificateId).length != 0,
            "Certificate does not exist"
        );
        return certificates[certificateId];
    }
}

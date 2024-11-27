// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./CertificateManager.sol";
import "./AuditTrailManager.sol";
import "./OwnershipManager.sol";

contract MainContract is
    CertificateManager,
    AuditTrailManager,
    OwnershipManager
{
    // 主合约可以直接调用 CertificateManager、AuditTrailManager 和 OwnershipManager 的方法
}

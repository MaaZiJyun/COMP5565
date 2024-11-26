// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract JewelryAccessControl is AccessControl {
    bytes32 public constant MINER_ROLE = keccak256("MINER_ROLE");
    bytes32 public constant CUTTER_ROLE = keccak256("CUTTER_ROLE");
    bytes32 public constant LAB_ROLE = keccak256("LAB_ROLE");
    bytes32 public constant JEWELER_ROLE = keccak256("JEWELER_ROLE");

    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(MINER_ROLE, msg.sender);
        _grantRole(CUTTER_ROLE, msg.sender);
        _grantRole(LAB_ROLE, msg.sender);
        _grantRole(JEWELER_ROLE, msg.sender);
    }

    modifier onlyMiner() {
        require(hasRole(MINER_ROLE, msg.sender), "Caller is not a miner");
        _;
    }

    modifier onlyCutter() {
        require(hasRole(CUTTER_ROLE, msg.sender), "Caller is not a cutter");
        _;
    }

    modifier onlyLab() {
        require(hasRole(LAB_ROLE, msg.sender), "Caller is not a lab");
        _;
    }

    modifier onlyJeweler() {
        require(hasRole(JEWELER_ROLE, msg.sender), "Caller is not a jeweler");
        _;
    }
} 
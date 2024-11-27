// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TestContract {
    struct Test {
        string id; // 唯一的标识符
        uint256 number; // 一个数字
    }

    mapping(string => Test) public tests;

    // 创建事件
    event TestCreated(string id, uint256 number);

    // 保存测试数据
    function createTest(string memory id, uint256 number) public {
        require(bytes(id).length > 0, "ID cannot be empty");
        require(
            bytes(tests[id].id).length == 0,
            "Test with this ID already exists"
        );

        // 保存到映射
        tests[id] = Test(id, number);

        // 调试点
        emit TestCreated(id, number);
        // 加一个日志调试点以确认函数执行到了这里
        emit TestCreated("debug_id", 9999);
    }
}

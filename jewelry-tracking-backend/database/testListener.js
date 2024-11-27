// 替换 require("dotenv").config(); 为以下代码
import dotenv from "dotenv";
dotenv.config(); // 调用 config() 加载 .env 文件

import { ethers } from "ethers";
import pool from "./db.js"; // 使用 CommonJS 的 require

// 初始化合约信息
const contractAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";
const contractABI = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "id",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "number",
                "type": "uint256"
            }
        ],
        "name": "TestCreated",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "id",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "number",
                "type": "uint256"
            }
        ],
        "name": "createTest",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "name": "tests",
        "outputs": [
            {
                "internalType": "string",
                "name": "id",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "number",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

// Provider 和 Signer 配置
const provider = new ethers.WebSocketProvider("ws://127.0.0.1:8545");
const localProvider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
const privateKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const signer = new ethers.Wallet(privateKey, localProvider);

const contract = new ethers.Contract(contractAddress, contractABI, signer);
const wsContract = new ethers.Contract(contractAddress, contractABI, provider);

// 发送交易并打印交易日志
// (async () => {
//     try {
//         console.log("Sending transaction...");
//         const tx = await contract.createTest("123", 456); // 发送交易
//         console.log("Transaction hash:", tx.hash);

//         // 等待交易确认并获取收据
//         const receipt = await tx.wait();

//         // 检查交易状态
//         if (receipt.status === 1) {
//             console.log("Transaction confirmed successfully");
//         } else {
//             console.log("Transaction failed");
//         }

//         // 检查交易日志
//         console.log("Transaction Logs:", receipt.logs);
//     } catch (error) {
//         console.error("Error in transaction:", error);
//     }
// })();

// 实时订阅事件
wsContract.on("TestCreated", async (id, number) => {
    console.log(`Real-time Event detected: ID=${id}, Number=${number}`);
    try {
        // 插入事件数据到数据库
        await pool.query(
            "INSERT INTO test_created_events (id, number) VALUES ($1, $2) ON CONFLICT (id) DO NOTHING",
            [id, Number(number)]
        );

        console.log(`Event with ID=${id} successfully saved to database!`);
    } catch (error) {
        console.error("Failed to insert event into database:", error);
    }
});

console.log("Listening for TestCreated events...");

// 轮询历史事件（最近 10 个区块）
// const eventFilter = contract.filters.TestCreated();
// setInterval(async () => {
//     try {
//         const currentBlock = await provider.getBlockNumber();
//         const fromBlock = Math.max(0, currentBlock - 10); // 查询最近 10 个区块
//         const events = await contract.queryFilter(eventFilter, fromBlock, currentBlock);

//         events.forEach(event => {
//             console.log(`Historical Event detected: ID=${event.args.id}, Number=${event.args.number}`);
//         });
//     } catch (error) {
//         console.error("Error querying events:", error);
//     }
// });

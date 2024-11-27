require('dotenv').config();
const Web3 = require('web3').default; // 使用 Web3 的默认导出
const { Certificate, AuditTrail, Ownership } = require('./models');
const logger = require('./utils/logger');

const INFURA_URL = process.env.INFURA_URL;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

if (!INFURA_URL || !CONTRACT_ADDRESS) {
  console.error('Error: INFURA_URL or CONTRACT_ADDRESS is not defined in .env file.');
  process.exit(1);
}

const web3 = new Web3(INFURA_URL); // 初始化 Web3
const contractABI = require('../artifacts/contracts/MainContract.sol/MainContract.json'); // 替换为你的 ABI 文件路径
const contract = new web3.eth.Contract(contractABI.abi, CONTRACT_ADDRESS);

// 监听 CertificateCreated 事件
async function listenToEvents() {
  logger.info("开始监听 CertificateCreated 事件...");

  contract.on("CertificateCreated", async (id, batchCode, state, price, description, productionDate, signature) => {
    logger.info(`捕获事件：CertificateCreated(${id})`);

    // 准备保存到数据库的数据
    const certificateData = {
      id: id,
      batchCode: batchCode,
      state: state,
      price: price,
      description: description,
      productionDate: productionDate, // 转换 UNIX 时间戳
      signature: signature
    };

    try {
      // 保存到 PostgreSQL
      await Certificate.create(certificateData);
      logger.info(`数据成功存储到数据库：ID=${id}`);
    } catch (error) {
      logger.error(`存储数据时发生错误：${error.message}`);
    }
  });
}

listenToEvents();
setInterval(() => { }, 1000); // 防止脚本退出
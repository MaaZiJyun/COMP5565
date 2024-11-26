# 区块链珠宝追踪系统

这是一个基于区块链技术的珠宝追踪系统，用于追踪珠宝从原石开采到最终销售的完整生命周期。

## 功能特点

- 珠宝生命周期追踪
  - 原石开采记录
  - 切割打磨过程
  - 品质认证信息
  - 设计制作记录
  - 销售和所有权转移

- 数字证书管理
  - 发行数字证书
  - 证书验证
  - 证书撤销

- 真伪验证
  - 通过唯一ID验证
  - 查看完整历史记录
  - 验证当前状态

## 技术栈

### 后端
- Hardhat - 以太坊开发框架
- Solidity - 智能合约开发语言
- TypeScript - 测试和部署脚本
- OpenZeppelin - 智能合约库

### 前端
- Next.js - React框架
- TailwindCSS - CSS框架
- ethers.js - 以太坊交互库
- IPFS - 去中心化存储

## 项目结构

```
jewelry_tracing/
├── contracts/              # 智能合约
│   ├── AccessControl.sol   # 访问控制合约
│   ├── JewelryNFT.sol     # 珠宝NFT合约
│   ├── CertificateRegistry.sol  # 证书注册合约
│   └── SupplyChain.sol    # 供应链合约
├── frontend/              # 前端应用
│   ├── components/        # React组件
│   ├── pages/            # 页面组件
│   └── styles/           # 样式文件
├── scripts/              # 部署脚本
├── test/                 # 测试文件
└── hardhat.config.ts     # Hardhat配置
```

## 快速开始

1. 克隆项目
```bash
git clone [repository-url]
cd jewelry_tracing
```

2. 安装依赖
```bash
# 安装智能合约依赖
npm install

# 安装前端依赖
cd frontend
npm install
```

3. 运行本地区块链
```bash
npx hardhat node
```

4. 部署合约
```bash
npx hardhat run scripts/deploy.ts --network localhost
```

5. 运行前端
```bash
cd frontend
npm run dev
```

## 测试

运行测试套件：
```bash
npx hardhat test
```

## 部署

1. 配置环境变量
创建 `.env` 文件并添加：
```
PRIVATE_KEY=your_private_key
INFURA_PROJECT_ID=your_infura_project_id
```

2. 部署到测试网
```bash
npx hardhat run scripts/deploy.ts --network goerli
```

## 许可证

MIT 
import { createConfig, configureChains } from 'wagmi';
import { mainnet, goerli } from 'wagmi/chains';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';

// 配置本地 Hardhat 链
const hardhatChain = {
  id: 1337,
  name: 'Hardhat',
  network: 'hardhat',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { http: ['http://127.0.0.1:8545'] },
    public: { http: ['http://127.0.0.1:8545'] },
  },
  blockExplorers: {
    default: { name: 'Hardhat', url: 'http://localhost:8545' },
  },
  testnet: true,
};

const chains = [hardhatChain, goerli];
const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || '';

const metadata = {
  name: '珠宝追踪系统',
  description: '基于区块链的珠宝追踪系统',
  url: 'https://jewelry-tracing.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

// 使用 defaultWagmiConfig 创建配置
const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

// 创建 Web3Modal 实例
const web3modal = createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  defaultChain: hardhatChain,
  themeMode: 'light',
  themeVariables: {
    '--w3m-font-family': 'Roboto, sans-serif',
    '--w3m-accent-color': '#4F46E5',
  },
});

export { wagmiConfig, projectId, web3modal }; 
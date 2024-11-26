import { createConfig, configureChains } from 'wagmi'
import { mainnet, goerli } from 'wagmi/chains'
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { publicProvider } from 'wagmi/providers/public'

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
}

const chains = [hardhatChain, goerli]
const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || ''

// 配置 providers 和 chains
const { publicClient, webSocketPublicClient } = configureChains(
  chains,
  [publicProvider()]
)

// 配置连接器
const connectors = [
  new WalletConnectConnector({
    chains,
    options: {
      projectId,
    },
  }),
  new InjectedConnector({
    chains,
    options: {
      name: 'Injected',
      shimDisconnect: true,
    },
  }),
]

// 创建 wagmi 配置
export const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

// 创建 Web3Modal 实例
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  chains,
  defaultChain: hardhatChain,
})

export { chains } 
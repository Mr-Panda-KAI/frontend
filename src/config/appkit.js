import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, sepolia, polygon, optimism, arbitrum, base, avalanche } from '@reown/appkit/networks'
import { sonic } from '../chains/sonic.js'
import { celestiaMainnet, celestiaMochaTestnet, celestiaArabicaDevnet, monadTestnet } from '../chains/index.js'

// Get projectId from environment or use a default for development
export const projectId = import.meta.env.VITE_PROJECT_ID || "b56e18d47c72ab683b10814fe9495694" // public projectId for localhost

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const metadata = {
  name: 'Sonic IA',
  description: 'AI-powered chatbot with multi-chain payment support',
  url: 'https://reown.com', // Update this to your actual domain
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// Define custom networks that need to be converted to AppKit format
const sonicNetwork = {
  id: sonic.id,
  name: sonic.name,
  nativeCurrency: sonic.nativeCurrency,
  rpcUrls: {
    public: { http: [sonic.rpcUrls.default.http[0]] },
    default: { http: [sonic.rpcUrls.default.http[0]] }
  },
  blockExplorers: sonic.blockExplorers ? {
    default: {
      name: sonic.blockExplorers.default.name,
      url: sonic.blockExplorers.default.url
    }
  } : undefined,
  testnet: sonic.testnet || false
}

const celestiaMainnetNetwork = {
  id: celestiaMainnet.id,
  name: celestiaMainnet.name,
  nativeCurrency: celestiaMainnet.nativeCurrency,
  rpcUrls: {
    public: { http: [celestiaMainnet.rpcUrls.default.http[0]] },
    default: { http: [celestiaMainnet.rpcUrls.default.http[0]] }
  },
  blockExplorers: celestiaMainnet.blockExplorers ? {
    default: {
      name: celestiaMainnet.blockExplorers.default.name,
      url: celestiaMainnet.blockExplorers.default.url
    }
  } : undefined,
  testnet: celestiaMainnet.testnet || false
}

const celestiaMochaNetwork = {
  id: celestiaMochaTestnet.id,
  name: celestiaMochaTestnet.name,
  nativeCurrency: celestiaMochaTestnet.nativeCurrency,
  rpcUrls: {
    public: { http: [celestiaMochaTestnet.rpcUrls.default.http[0]] },
    default: { http: [celestiaMochaTestnet.rpcUrls.default.http[0]] }
  },
  blockExplorers: celestiaMochaTestnet.blockExplorers ? {
    default: {
      name: celestiaMochaTestnet.blockExplorers.default.name,
      url: celestiaMochaTestnet.blockExplorers.default.url
    }
  } : undefined,
  testnet: celestiaMochaTestnet.testnet || true
}

const celestiaArabicaNetwork = {
  id: celestiaArabicaDevnet.id,
  name: celestiaArabicaDevnet.name,
  nativeCurrency: celestiaArabicaDevnet.nativeCurrency,
  rpcUrls: {
    public: { http: [celestiaArabicaDevnet.rpcUrls.default.http[0]] },
    default: { http: [celestiaArabicaDevnet.rpcUrls.default.http[0]] }
  },
  blockExplorers: celestiaArabicaDevnet.blockExplorers ? {
    default: {
      name: celestiaArabicaDevnet.blockExplorers.default.name,
      url: celestiaArabicaDevnet.blockExplorers.default.url
    }
  } : undefined,
  testnet: celestiaArabicaDevnet.testnet || true
}

const monadNetwork = {
  id: monadTestnet.id,
  name: monadTestnet.name,
  nativeCurrency: monadTestnet.nativeCurrency,
  rpcUrls: {
    public: { http: [monadTestnet.rpcUrls.default.http[0]] },
    default: { http: [monadTestnet.rpcUrls.default.http[0]] }
  },
  blockExplorers: monadTestnet.blockExplorers ? {
    default: {
      name: monadTestnet.blockExplorers.default.name,
      url: monadTestnet.blockExplorers.default.url
    }
  } : undefined,
  testnet: monadTestnet.testnet || true
}

// Combine EVM-compatible networks only (exclude Cosmos chains)
export const networks = [
  sonicNetwork,
  mainnet,
  sepolia,
  avalanche,
  polygon,
  optimism,
  arbitrum,
  base,
  monadNetwork
]

// Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks
})

export const config = wagmiAdapter.wagmiConfig

// Debug: Log the networks being used
console.log('AppKit Networks configured:', networks.map(n => ({ id: n.id, name: n.name })))
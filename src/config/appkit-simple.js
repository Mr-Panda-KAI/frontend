import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, sepolia, polygon, optimism, arbitrum, base, avalanche } from '@reown/appkit/networks'

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

// Use basic networks first to test functionality
export const networks = [
  mainnet,
  sepolia,
  polygon,
  optimism,
  arbitrum,
  base,
  avalanche
]

// Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks
})

export const config = wagmiAdapter.wagmiConfig
# 🌐 Multi-Chain Support Documentation

## Supported Networks

The Sonic IA application now supports multiple blockchain networks with automatic explorer detection:

### Mainnet Networks
- **Sonic** - Chain ID: 146
- **Ethereum** - Chain ID: 1  
- **Avalanche** - Chain ID: 43114
- **Polygon** - Chain ID: 137
- **Optimism** - Chain ID: 10
- **Arbitrum** - Chain ID: 42161
- **Base** - Chain ID: 8453

### Testnet Networks  
- **Sepolia** - Chain ID: 11155111
- **Celestia Mocha Testnet** - Chain ID: 123420111
- **Monad Testnet** - Chain ID: 41455

## Explorer URLs

Each network has its corresponding block explorer:

| Network | Explorer | Address URL | Transaction URL |
|---------|----------|-------------|-----------------|
| Sonic | Sonicscan | https://sonicscan.org/address/ | https://sonicscan.org/tx/ |
| Ethereum | Etherscan | https://etherscan.io/address/ | https://etherscan.io/tx/ |
| Sepolia | Sepolia Etherscan | https://sepolia.etherscan.io/address/ | https://sepolia.etherscan.io/tx/ |
| Avalanche | Snowtrace | https://snowtrace.io/address/ | https://snowtrace.io/tx/ |
| Polygon | Polygonscan | https://polygonscan.com/address/ | https://polygonscan.com/tx/ |
| Optimism | Optimistic Etherscan | https://optimistic.etherscan.io/address/ | https://optimistic.etherscan.io/tx/ |
| Arbitrum | Arbiscan | https://arbiscan.io/address/ | https://arbiscan.io/tx/ |
| Base | Basescan | https://basescan.org/address/ | https://basescan.org/tx/ |
| Celestia Mocha | Mintscan | https://www.mintscan.io/celestia-testnet/address/ | https://www.mintscan.io/celestia-testnet/tx/ |
| Monad | Monad Explorer | https://testnet.monadexplorer.com/address/ | https://testnet.monadexplorer.com/tx/ |

## Features

### ✅ Dynamic Network Detection
- Automatically detects the current connected network
- Shows appropriate explorer links based on active chain

### ✅ Smart Explorer Links  
- Transaction confirmation messages show network-specific explorer names
- "View on [Explorer Name]" links adapt to the current network
- Supports both address and transaction lookups

### ✅ Multi-Chain Wallet Integration
- ConnectButton supports all configured networks
- Users can switch between networks seamlessly
- RainbowKit integration with custom chain configurations

## Usage in Chat Interface

When users perform transactions:

1. **Network Detection**: Automatically detects connected network
2. **Dynamic Messaging**: Shows confirmation with network-specific details
3. **Explorer Links**: Provides direct links to view transactions on the appropriate explorer
4. **Network Names**: Displays human-readable network names in messages

Example transaction confirmation:
```
✅ Token sent successfully!

💰 Details:
• Amount: 1.0 S
• Recipient: Omar
• Hash: 0x123...abc
• Network: Sonic

🔗 View on Sonic: https://sonicscan.org/tx/0x123...abc

Transaction completed! 🎉
```

## Technical Implementation

### Files Modified:
- `src/main.jsx` - Added all supported chains to RainbowKit config
- `src/chains/index.js` - Custom chain configurations for Celestia and Monad
- `src/utils/explorers.js` - Explorer URL utilities
- `src/config/contract.js` - Updated URL functions to accept chainId
- `src/components/chat/ChatTest.jsx` - Dynamic explorer integration

### Key Functions:
- `getTransactionExplorerUrl(chainId, txHash)` - Get transaction URL
- `getAddressExplorerUrl(chainId, address)` - Get address URL  
- `getExplorerName(chainId)` - Get explorer display name
- `hasExplorer(chainId)` - Check if explorer is configured
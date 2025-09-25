// Mapeo de chain IDs a exploradores de blockchain
export const CHAIN_EXPLORERS = {
  // Sonic
  146: {
    name: 'Sonic',
    baseUrl: 'https://sonicscan.org',
    addressUrl: 'https://sonicscan.org/address/',
    txUrl: 'https://sonicscan.org/tx/'
  },
  // Ethereum Mainnet
  1: {
    name: 'Ethereum',
    baseUrl: 'https://etherscan.io',
    addressUrl: 'https://etherscan.io/address/',
    txUrl: 'https://etherscan.io/tx/'
  },
  // Sepolia Testnet
  11155111: {
    name: 'Sepolia',
    baseUrl: 'https://sepolia.etherscan.io',
    addressUrl: 'https://sepolia.etherscan.io/address/',
    txUrl: 'https://sepolia.etherscan.io/tx/'
  },
  // Avalanche
  43114: {
    name: 'Avalanche',
    baseUrl: 'https://snowtrace.io',
    addressUrl: 'https://snowtrace.io/address/',
    txUrl: 'https://snowtrace.io/tx/'
  },
  // Polygon
  137: {
    name: 'Polygon',
    baseUrl: 'https://polygonscan.com',
    addressUrl: 'https://polygonscan.com/address/',
    txUrl: 'https://polygonscan.com/tx/'
  },
  // Optimism
  10: {
    name: 'Optimism',
    baseUrl: 'https://optimistic.etherscan.io',
    addressUrl: 'https://optimistic.etherscan.io/address/',
    txUrl: 'https://optimistic.etherscan.io/tx/'
  },
  // Arbitrum
  42161: {
    name: 'Arbitrum',
    baseUrl: 'https://arbiscan.io',
    addressUrl: 'https://arbiscan.io/address/',
    txUrl: 'https://arbiscan.io/tx/'
  },
  // Base
  8453: {
    name: 'Base',
    baseUrl: 'https://basescan.org',
    addressUrl: 'https://basescan.org/address/',
    txUrl: 'https://basescan.org/tx/'
  },
  // Celestia Mainnet
  1000000: {
    name: 'Celestia',
    baseUrl: 'https://www.mintscan.io/celestia',
    addressUrl: 'https://www.mintscan.io/celestia/address/',
    txUrl: 'https://www.mintscan.io/celestia/tx/'
  },
  // Celestia Mocha Testnet
  123420111: {
    name: 'Celestia Mocha Testnet',
    baseUrl: 'https://mintscan.io/celestia-testnet',
    addressUrl: 'https://mintscan.io/celestia-testnet/address/',
    txUrl: 'https://mintscan.io/celestia-testnet/tx/'
  },
  // Celestia Arabica Devnet
  123420000: {
    name: 'Celestia Arabica Devnet',
    baseUrl: 'https://explorer.celestia-arabica-11.com',
    addressUrl: 'https://explorer.celestia-arabica-11.com/address/',
    txUrl: 'https://explorer.celestia-arabica-11.com/tx/'
  },
  // Monad Testnet
  41455: {
    name: 'Monad Testnet',
    baseUrl: 'https://testnet.monadexplorer.com',
    addressUrl: 'https://testnet.monadexplorer.com/address/',
    txUrl: 'https://testnet.monadexplorer.com/tx/'
  }
};

/**
 * Obtiene la URL del explorador para una dirección en una red específica
 * @param {number} chainId - ID de la red
 * @param {string} address - Dirección de la wallet o contrato
 * @returns {string} URL completa del explorador
 */
export const getAddressExplorerUrl = (chainId, address) => {
  const explorer = CHAIN_EXPLORERS[chainId];
  if (!explorer) {
    console.warn(`Explorer no configurado para chain ID: ${chainId}`);
    return '#';
  }
  return `${explorer.addressUrl}${address}`;
};

/**
 * Obtiene la URL del explorador para una transacción en una red específica
 * @param {number} chainId - ID de la red
 * @param {string} txHash - Hash de la transacción
 * @returns {string} URL completa del explorador
 */
export const getTransactionExplorerUrl = (chainId, txHash) => {
  const explorer = CHAIN_EXPLORERS[chainId];
  if (!explorer) {
    console.warn(`Explorer no configurado para chain ID: ${chainId}`);
    return '#';
  }
  return `${explorer.txUrl}${txHash}`;
};

/**
 * Obtiene el nombre del explorador para una red específica
 * @param {number} chainId - ID de la red
 * @returns {string} Nombre del explorador
 */
export const getExplorerName = (chainId) => {
  const explorer = CHAIN_EXPLORERS[chainId];
  return explorer ? explorer.name : 'Unknown Explorer';
};

/**
 * Verifica si una red tiene explorador configurado
 * @param {number} chainId - ID de la red
 * @returns {boolean} True si tiene explorador configurado
 */
export const hasExplorer = (chainId) => {
  return chainId in CHAIN_EXPLORERS;
};
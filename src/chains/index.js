// Celestia Mainnet (configuración híbrida para RainbowKit)
export const celestiaMainnet = {
  id: 1000000, // Chain ID único para RainbowKit
  name: 'Celestia',
  network: 'celestia',
  nativeCurrency: {
    name: 'TIA',
    symbol: 'TIA',
    decimals: 6,
  },
  rpcUrls: {
    default: { http: ['https://rpc.lunaroasis.net'] },
    public: { http: ['https://rpc.lunaroasis.net'] },
  },
  blockExplorers: {
    default: { name: 'Mintscan', url: 'https://www.mintscan.io/celestia' },
  },
  testnet: false,
  // Configuración específica de Celestia para Keplr
  celestiaConfig: {
    chainId: 'celestia',
    chainName: 'Celestia',
    rpc: 'https://rpc.lunaroasis.net/',
    rest: 'https://api.lunaroasis.net/',
    bip44: { coinType: 118 },
    bech32Config: {
      bech32PrefixAccAddr: 'celestia',
      bech32PrefixAccPub: 'celestiapub',
      bech32PrefixValAddr: 'celestiavaloper',
      bech32PrefixValPub: 'celestiavaloperpub',
      bech32PrefixConsAddr: 'celestiavalcons',
      bech32PrefixConsPub: 'celestiavalconspub',
    },
    currencies: [
      {
        coinDenom: 'TIA',
        coinMinimalDenom: 'utia',
        coinDecimals: 6,
        coinGeckoId: 'celestia',
      },
    ],
    feeCurrencies: [
      {
        coinDenom: 'TIA',
        coinMinimalDenom: 'utia',
        coinDecimals: 6,
        coinGeckoId: 'celestia',
        gasPriceStep: {
          low: 0.01,
          average: 0.02,
          high: 0.1,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: 'TIA',
      coinMinimalDenom: 'utia',
      coinDecimals: 6,
      coinGeckoId: 'celestia',
      hideInUI: false,
    },
    features: ['stargate', 'ibc-transfer'],
    hideInUI: false,
  },
};

// Celestia Mocha Testnet (configuración híbrida para RainbowKit)
export const celestiaMochaTestnet = {
  id: 123420111,
  name: 'Celestia Mocha Testnet',
  network: 'celestia-mocha-testnet',
  nativeCurrency: {
    name: 'TIA',
    symbol: 'TIA',
    decimals: 6,
  },
  rpcUrls: {
    default: { http: ['https://rpc-mocha.pops.one'] },
    public: { http: ['https://rpc-mocha.pops.one'] },
  },
  blockExplorers: {
    default: { name: 'Mintscan', url: 'https://mintscan.io/celestia-testnet' },
  },
  testnet: true,
  // Configuración específica de Celestia para Keplr
  celestiaConfig: {
    chainId: 'mocha-4',
    chainName: 'Celestia Mocha Testnet',
    rpc: 'https://rpc-mocha.pops.one/',
    rest: 'https://api-mocha.pops.one/',
    altRest: [
      'https://api.celestia-mocha.com/',
      'https://celestia-testnet-api.itrocket.net',
      'https://celestia-t-api.noders.services'
    ],
    bip44: { coinType: 118 },
    bech32Config: {
      bech32PrefixAccAddr: 'celestia',
      bech32PrefixAccPub: 'celestiapub',
      bech32PrefixValAddr: 'celestiavaloper',
      bech32PrefixValPub: 'celestiavaloperpub',
      bech32PrefixConsAddr: 'celestiavalcons',
      bech32PrefixConsPub: 'celestiavalconspub',
    },
    currencies: [
      {
        coinDenom: 'TIA',
        coinMinimalDenom: 'utia',
        coinDecimals: 6,
        coinGeckoId: 'celestia',
      },
    ],
    feeCurrencies: [
      {
        coinDenom: 'TIA',
        coinMinimalDenom: 'utia',
        coinDecimals: 6,
        coinGeckoId: 'celestia',
        gasPriceStep: {
          low: 0.01,
          average: 0.02,
          high: 0.1,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: 'TIA',
      coinMinimalDenom: 'utia',
      coinDecimals: 6,
      coinGeckoId: 'celestia',
      hideInUI: false,
    },
    features: ['stargate', 'ibc-transfer'],
    hideInUI: false,
  },
};

// Celestia Arabica Devnet (configuración híbrida para RainbowKit)
export const celestiaArabicaDevnet = {
  id: 123420000,
  name: 'Celestia Arabica Devnet',
  network: 'arabica-11',
  nativeCurrency: {
    name: 'TIA',
    symbol: 'TIA',
    decimals: 6,
  },
  rpcUrls: {
    default: { http: ['https://rpc.celestia-arabica-11.com'] },
    public: { http: ['https://rpc.celestia-arabica-11.com'] },
  },
  blockExplorers: {
    default: { name: 'Arabica Explorer', url: 'https://explorer.celestia-arabica-11.com' },
  },
  testnet: true,
  // Configuración específica de Celestia para Keplr
  celestiaConfig: {
    chainId: 'arabica-11',
    chainName: 'Celestia Arabica Devnet',
    rpc: 'https://rpc.celestia-arabica-11.com/',
    rest: 'https://api.celestia-arabica-11.com/',
    altRest: [
      'https://api.celestia-arabica-11.com/',
      'https://validator-1.celestia-arabica-11.com:1317',
      'https://validator-2.celestia-arabica-11.com:1317'
    ],
    bip44: { coinType: 118 },
    bech32Config: {
      bech32PrefixAccAddr: 'celestia',
      bech32PrefixAccPub: 'celestiapub',
      bech32PrefixValAddr: 'celestiavaloper',
      bech32PrefixValPub: 'celestiavaloperpub',
      bech32PrefixConsAddr: 'celestiavalcons',
      bech32PrefixConsPub: 'celestiavalconspub',
    },
    currencies: [
      {
        coinDenom: 'TIA',
        coinMinimalDenom: 'utia',
        coinDecimals: 6,
        coinGeckoId: 'celestia',
      },
    ],
    feeCurrencies: [
      {
        coinDenom: 'TIA',
        coinMinimalDenom: 'utia',
        coinDecimals: 6,
        coinGeckoId: 'celestia',
        gasPriceStep: {
          low: 0.01,
          average: 0.02,
          high: 0.1,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: 'TIA',
      coinMinimalDenom: 'utia',
      coinDecimals: 6,
      coinGeckoId: 'celestia',
      hideInUI: false,
    },
    features: ['stargate', 'ibc-transfer'],
    hideInUI: false,
  },
};

// Monad Testnet
export const monadTestnet = {
  id: 41455,
  name: 'Monad Testnet',
  network: 'monad-testnet',
  nativeCurrency: {
    name: 'MON',
    symbol: 'MON',
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ['https://testnet-rpc.monad.xyz'] },
    public: { http: ['https://testnet-rpc.monad.xyz'] },
  },
  blockExplorers: {
    default: { name: 'Monad Explorer', url: 'https://testnet.monadexplorer.com' },
  },
  testnet: true,
};
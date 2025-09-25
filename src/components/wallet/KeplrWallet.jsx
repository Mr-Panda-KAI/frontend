import React, { useState, useEffect } from 'react';
import { Button } from '../ui';

// Configuraciones de redes Celestia
const CELESTIA_NETWORKS = {
  mainnet: {
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
    },
  },
  mocha: {
    chainId: 'mocha-4',
    chainName: 'Celestia Mocha Testnet',
    rpc: 'https://rpc-mocha.pops.one/',
    rest: 'https://api-mocha.pops.one/',
    // URLs alternativas según documentación oficial
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
    },
  },
  arabica: {
    chainId: 'arabica-11',
    chainName: 'Celestia Arabica Devnet',
    rpc: 'https://rpc.celestia-arabica-11.com/',
    rest: 'https://api.celestia-arabica-11.com/',
    // URLs según documentación oficial
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
    },
  },
};

const KeplrWallet = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState('0');
  const [selectedNetwork, setSelectedNetwork] = useState('mainnet');
  const [isLoading, setIsLoading] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState('disconnected'); // disconnected, connecting, connected, error

  // Verificar si Keplr está instalado
  const isKeplrInstalled = () => {
    return typeof window !== 'undefined' && !!window.keplr;
  };

  // Conectar a Keplr
  const connectKeplr = async () => {
    if (!isKeplrInstalled()) {
      alert('Por favor instala Keplr wallet: https://www.keplr.app/');
      return;
    }

    try {
      setIsLoading(true);
      setConnectionStatus('connecting');
      const network = CELESTIA_NETWORKS[selectedNetwork];

      console.log(`🔗 Conectando a ${network.chainName}...`);

      // Sugerir la cadena a Keplr
      if (window.keplr.experimentalSuggestChain) {
        console.log(`📡 Sugiriendo cadena a Keplr...`);
        await window.keplr.experimentalSuggestChain(network);
      }

      // Habilitar la cadena
      console.log(`🔓 Habilitando cadena...`);
      await window.keplr.enable(network.chainId);

      // Obtener la clave offline
      console.log(`🔑 Obteniendo cuentas...`);
      const offlineSigner = window.keplr.getOfflineSigner(network.chainId);
      const accounts = await offlineSigner.getAccounts();

      if (accounts.length > 0) {
        setAddress(accounts[0].address);
        setIsConnected(true);
        setConnectionStatus('connected');
        console.log(`✅ Conectado exitosamente: ${accounts[0].address}`);
        await getBalance(accounts[0].address, network);
      }
    } catch (error) {
      console.error('❌ Error conectando a Keplr:', error);
      setConnectionStatus('error');
      alert('Error conectando a Keplr: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Obtener balance con múltiples métodos y endpoints
  const getBalance = async (address, network) => {
    console.log(`🔍 Obteniendo balance para ${address} en ${network.chainName}`);
    console.log(`📡 URL principal: ${network.rest}`);
    
    // Lista de todos los endpoints a probar
    const endpoints = [
      network.rest,
      ...(Array.isArray(network.altRest) ? network.altRest : [network.altRest])
    ].filter(Boolean);
    
    console.log(`🌐 Endpoints disponibles:`, endpoints);
    
    for (const endpoint of endpoints) {
      try {
        console.log(`🔄 Probando endpoint: ${endpoint}`);
        
        // Método 1: API estándar de Cosmos
        const balanceUrl = `${endpoint}/cosmos/bank/v1beta1/balances/${address}`;
        console.log(`📡 Consultando: ${balanceUrl}`);
        
        const response = await fetch(balanceUrl);
        console.log(`📊 Estado de respuesta: ${response.status} para ${endpoint}`);
        
        if (!response.ok) {
          console.log(`❌ Error HTTP ${response.status} en ${endpoint}`);
          continue; // Probar siguiente endpoint
        }
        
        const data = await response.json();
        console.log(`📋 Respuesta de ${endpoint}:`, data);
        
        // Buscar balance de utia
        const utiaBalance = data.balances?.find(
          (balance) => balance.denom === 'utia'
        );
        
        console.log(`💰 Balance utia encontrado en ${endpoint}:`, utiaBalance);
        
        if (utiaBalance && utiaBalance.amount) {
          // Convertir de utia a TIA (dividir por 10^6)
          const tiaAmount = parseInt(utiaBalance.amount) / 1000000;
          console.log(`✅ Balance calculado: ${tiaAmount} TIA desde ${endpoint}`);
          setBalance(tiaAmount.toFixed(6));
          return; // Éxito, salir de la función
        } else {
          console.log(`⚠️ No se encontró balance de utia en ${endpoint}`);
        }
        
      } catch (error) {
        console.error(`❌ Error con endpoint ${endpoint}:`, error.message);
        continue; // Probar siguiente endpoint
      }
    }
    
    // Si todos los endpoints principales fallan, intentar métodos legacy
    console.log(`🔄 Intentando métodos legacy...`);
    
    for (const endpoint of endpoints) {
      try {
        // Método 2: API legacy para testnets antiguas
        const legacyUrl = `${endpoint}/bank/balances/${address}`;
        console.log(`🌐 URL legacy: ${legacyUrl}`);
        
        const legacyResponse = await fetch(legacyUrl);
        const legacyData = await legacyResponse.json();
        console.log(`📋 Respuesta legacy de ${endpoint}:`, legacyData);
        
        if (legacyData.result && legacyData.result.length > 0) {
          const utiaBalance = legacyData.result.find(
            (balance) => balance.denom === 'utia'
          );
          
          if (utiaBalance) {
            const tiaAmount = parseInt(utiaBalance.amount) / 1000000;
            console.log(`✅ Balance legacy calculado: ${tiaAmount} TIA desde ${endpoint}`);
            setBalance(tiaAmount.toFixed(6));
            return;
          }
        }
      } catch (legacyError) {
        console.error(`❌ Error legacy con ${endpoint}:`, legacyError.message);
      }
    }
    
    // Si todos los métodos fallan
    console.error(`❌ No se pudo obtener balance de ningún endpoint`);
    setBalance('0.000000 (No disponible)');
  };

  // Desconectar
  const disconnect = () => {
    setIsConnected(false);
    setAddress('');
    setBalance('0');
    setConnectionStatus('disconnected');
    console.log(`🔌 Desconectado de Keplr`);
  };

  // Cambiar red y reconectar si es necesario
  const changeNetwork = async (networkKey) => {
    console.log(`🔄 Cambiando a red: ${networkKey}`);
    setSelectedNetwork(networkKey);
    
    if (isConnected) {
      setIsLoading(true);
      try {
        const network = CELESTIA_NETWORKS[networkKey];
        
        // Sugerir la nueva cadena a Keplr
        if (window.keplr.experimentalSuggestChain) {
          await window.keplr.experimentalSuggestChain(network);
        }
        
        // Habilitar la nueva cadena
        await window.keplr.enable(network.chainId);
        
        // Obtener nueva dirección para la red
        const offlineSigner = window.keplr.getOfflineSigner(network.chainId);
        const accounts = await offlineSigner.getAccounts();
        
        if (accounts.length > 0) {
          setAddress(accounts[0].address);
          await getBalance(accounts[0].address, network);
        }
      } catch (error) {
        console.error('❌ Error cambiando de red:', error);
        alert('Error cambiando de red: ' + error.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Formatear dirección
  const formatAddress = (addr) => {
    if (!addr) return '';
    return `${addr.slice(0, 8)}...${addr.slice(-6)}`;
  };

  useEffect(() => {
    // Verificar si ya está conectado al cargar
    if (isKeplrInstalled() && window.keplr.defaultOptions) {
      // Intentar reconectar automáticamente
    }
  }, []);

  return (
    <div className="space-y-4">
      {/* Estado de Conexión */}
      {connectionStatus !== 'disconnected' && (
        <div className="flex items-center gap-2 text-sm">
          <div className={`w-2 h-2 rounded-full ${
            connectionStatus === 'connecting' ? 'bg-yellow-400 animate-pulse' :
            connectionStatus === 'connected' ? 'bg-green-400' :
            connectionStatus === 'error' ? 'bg-red-400' : 'bg-gray-400'
          }`}></div>
          <span className="text-n-3">
            {connectionStatus === 'connecting' ? 'Conectando...' :
             connectionStatus === 'connected' ? 'Conectado' :
             connectionStatus === 'error' ? 'Error de conexión' : 'Desconectado'}
          </span>
        </div>
      )}

      {/* Selector de Red */}
      <div className="flex gap-2 mb-4">
        <select
          value={selectedNetwork}
          onChange={(e) => changeNetwork(e.target.value)}
          className="bg-n-8 border border-n-6 text-n-1 rounded px-3 py-2 text-sm"
          disabled={isLoading}
        >
          <option value="mainnet">Celestia Mainnet</option>
          <option value="mocha">Mocha Testnet</option>
          <option value="arabica">Arabica Devnet</option>
        </select>
      </div>

      {/* Botón de Conexión */}
      {!isConnected ? (
        <Button
          onClick={connectKeplr}
          disabled={isLoading}
          className="w-full relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 px-4 text-n-1"
        >
          <span className="relative z-10">
            {isLoading ? 'Conectando...' : 'Conectar Keplr (Celestia)'}
          </span>
        </Button>
      ) : (
        <div className="space-y-3">
          {/* Información de la Wallet */}
          <div className="bg-n-8 border border-n-6 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-n-3 text-sm">Dirección:</span>
              <span className="text-n-1 font-mono text-sm">
                {formatAddress(address)}
              </span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-n-3 text-sm">Balance:</span>
              <div className="flex items-center gap-2">
                <span className="text-n-1 font-semibold">
                  {balance} TIA
                </span>
                <button
                  onClick={() => getBalance(address, CELESTIA_NETWORKS[selectedNetwork])}
                  className="text-n-3 hover:text-n-1 text-xs"
                  disabled={isLoading}
                  title="Refrescar balance"
                >
                  🔄
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-n-3 text-sm">Red:</span>
              <span className="text-n-1 text-sm">
                {CELESTIA_NETWORKS[selectedNetwork].chainName}
              </span>
            </div>
          </div>

          {/* Botón de Desconexión */}
          <Button
            onClick={disconnect}
            className="w-full relative inline-flex items-center justify-center h-11 transition-colors hover:text-red-400 px-4 text-n-1 border border-red-400/50"
          >
            <span className="relative z-10">Desconectar Keplr</span>
          </Button>
        </div>
      )}

      {/* Información sobre Keplr */}
      {!isKeplrInstalled() && (
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
          <p className="text-yellow-400 text-sm">
            ⚠️ Keplr wallet no está instalado. 
            <a 
              href="https://www.keplr.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline ml-1"
            >
              Instalarlo aquí
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default KeplrWallet;
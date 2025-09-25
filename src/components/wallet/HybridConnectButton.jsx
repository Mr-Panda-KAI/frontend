import React, { useState, useEffect } from 'react';
import { useAccount, useBalance, useChainId } from 'wagmi';
import { celestiaMainnet, celestiaMochaTestnet, celestiaArabicaDevnet } from '../../chains';

// Mapeo de chainId a configuración de Celestia
const getCelestiaConfig = (chainId) => {
  const chainMap = {
    1000000: celestiaMainnet.celestiaConfig,
    123420111: celestiaMochaTestnet.celestiaConfig,
    123420000: celestiaArabicaDevnet.celestiaConfig,
  };
  return chainMap[chainId];
};

// Utility para obtener balance de Celestia usando Keplr
const getCelestiaBalance = async (address, chainConfig) => {
  const endpoints = [
    chainConfig.rest,
    ...(Array.isArray(chainConfig.altRest) ? chainConfig.altRest : [chainConfig.altRest])
  ].filter(Boolean);
  
  for (const endpoint of endpoints) {
    try {
      const balanceUrl = `${endpoint}/cosmos/bank/v1beta1/balances/${address}`;
      const response = await fetch(balanceUrl);
      
      if (!response.ok) continue;
      
      const data = await response.json();
      const utiaBalance = data.balances?.find(balance => balance.denom === 'utia');
      
      if (utiaBalance && utiaBalance.amount) {
        return (parseInt(utiaBalance.amount) / 1000000).toFixed(6);
      }
    } catch (error) {
      continue;
    }
  }
  
  return '0.000000';
};

// Componente que maneja la conexión a Keplr para Celestia
const CelestiaConnector = ({ chainId, onBalanceUpdate }) => {
  const [keplrAddress, setKeplrAddress] = useState('');
  const [keplrBalance, setKeplrBalance] = useState('0');
  const [isConnecting, setIsConnecting] = useState(false);

  const connectKeplr = async () => {
    if (!window.keplr) {
      alert('Por favor instala Keplr wallet: https://www.keplr.app/');
      return;
    }

    try {
      setIsConnecting(true);
      const celestiaConfig = getCelestiaConfig(chainId);

      // Validar que la configuración tenga todas las propiedades necesarias
      if (!celestiaConfig || !celestiaConfig.chainId) {
        throw new Error('Configuración de cadena Celestia inválida');
      }

      // Asegurar que todas las configuraciones de monedas tengan hideInUI definido
      if (celestiaConfig.currencies) {
        celestiaConfig.currencies = celestiaConfig.currencies.map(currency => ({
          ...currency,
          hideInUI: currency.hideInUI !== undefined ? currency.hideInUI : false
        }));
      }

      if (celestiaConfig.feeCurrencies) {
        celestiaConfig.feeCurrencies = celestiaConfig.feeCurrencies.map(currency => ({
          ...currency,
          hideInUI: currency.hideInUI !== undefined ? currency.hideInUI : false
        }));
      }

      if (celestiaConfig.stakeCurrency) {
        celestiaConfig.stakeCurrency = {
          ...celestiaConfig.stakeCurrency,
          hideInUI: celestiaConfig.stakeCurrency.hideInUI !== undefined ? celestiaConfig.stakeCurrency.hideInUI : false
        };
      }

      // Asegurar hideInUI en la configuración principal
      celestiaConfig.hideInUI = celestiaConfig.hideInUI !== undefined ? celestiaConfig.hideInUI : false;

      // Sugerir la cadena a Keplr
      if (window.keplr.experimentalSuggestChain) {
        await window.keplr.experimentalSuggestChain(celestiaConfig);
      }

      // Habilitar la cadena
      await window.keplr.enable(celestiaConfig.chainId);

      // Obtener cuentas
      const offlineSigner = window.keplr.getOfflineSigner(celestiaConfig.chainId);
      const accounts = await offlineSigner.getAccounts();

      if (accounts.length > 0) {
        const address = accounts[0].address;
        setKeplrAddress(address);
        
        // Obtener balance
        const balance = await getCelestiaBalance(address, celestiaConfig);
        setKeplrBalance(balance);
        
        // Notificar al componente padre
        onBalanceUpdate(address, balance);
      }
    } catch (error) {
      console.error('Error conectando a Keplr:', error);
      const errorMessage = error.message || 'Error desconocido';
      alert(`Error conectando a Keplr: ${errorMessage}`);
    } finally {
      setIsConnecting(false);
    }
  };

  return { connectKeplr, isConnecting, keplrAddress, keplrBalance };
};

// Componente principal que combina Reown AppKit con Celestia
const HybridConnectButton = () => {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const [celestiaData, setCelestiaData] = useState({});

  // IDs de las redes de Celestia
  const celestiaChainIds = [1000000, 123420111, 123420000];
  const isCelestiaChain = celestiaChainIds.includes(chainId);

  // Balance para redes EVM normales
  const { data: evmBalance } = useBalance({
    address: address,
    enabled: isConnected && !isCelestiaChain,
  });

  const handleCelestiaBalanceUpdate = (keplrAddress, balance) => {
    setCelestiaData({
      address: keplrAddress,
      balance: balance
    });
  };

  if (!isConnected) {
    return <appkit-button />;
  }

  // Si es una red de Celestia, mostrar componente especial
  if (isCelestiaChain) {
    return (
      <CelestiaWalletDisplay 
        chainId={chainId}
        onBalanceUpdate={handleCelestiaBalanceUpdate}
        celestiaData={celestiaData}
      />
    );
  }

  // Para redes EVM normales, usar el botón de AppKit
  return <appkit-button />;
};

// Componente para mostrar información de Celestia
const CelestiaWalletDisplay = ({ chainId, onBalanceUpdate, celestiaData }) => {
  const { connectKeplr, isConnecting, keplrAddress, keplrBalance } = CelestiaConnector({ 
    chainId, 
    onBalanceUpdate 
  });

  const displayAddress = celestiaData.address || keplrAddress;
  const displayBalance = celestiaData.balance || keplrBalance;

  if (!displayAddress) {
    return (
      <button
        onClick={connectKeplr}
        disabled={isConnecting}
        type="button"
        className="relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 px-4 text-n-1 bg-n-8 border border-n-6 rounded"
      >
        <span className="relative z-10">
          {isConnecting ? 'Connecting to Keplr...' : 'Connect Keplr for Celestia'}
        </span>
      </button>
    );
  }

  return (
    <div className="flex gap-2">
      <button
        type="button"
        className="relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 px-3 text-n-1 bg-n-8 border border-n-6 rounded"
      >
        <span className="relative z-10 flex items-center gap-2">
          Celestia Chain
        </span>
      </button>

      <button
        type="button"
        className="relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 px-4 text-n-1 bg-n-8 border border-n-6 rounded"
      >
        <span className="relative z-10">
          {`${displayAddress.slice(0, 6)}...${displayAddress.slice(-4)}`}
          <span className="ml-2 text-n-3">
            {displayBalance} TIA
          </span>
        </span>
      </button>
    </div>
  );
};

export default HybridConnectButton;
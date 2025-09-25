import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App.jsx";

import "./index.css";
import { createAppKit } from '@reown/appkit/react';

import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { projectId, metadata, networks, wagmiAdapter } from "./config/appkit.js";

// Create AppKit instance
const generalConfig = {
  projectId,
  networks,
  metadata,
  themeMode: 'dark',
  themeVariables: {
    '--w3m-accent': '#00ff88',
  }
}

console.log('Creating AppKit with config:', generalConfig);

createAppKit({
  adapters: [wagmiAdapter],
  ...generalConfig,
  features: {
    analytics: true
  }
});

console.log('AppKit created successfully');

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <WagmiProvider config={wagmiAdapter.wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <App />
          </Router>
        </QueryClientProvider>
      </WagmiProvider>
    </React.StrictMode>
  );
} else {
  throw new Error('Root element with id "root" not found');
}

# 🤖 AIni Pay - Transacciones Fáciles en Redes EVM + Celestia

<div align="center">
  <img src="./src/assets/IA chat/logo.png" alt="AIni Pay Logo" width="200"/>
  
  [![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
  [![Project Status](https://img.shields.io/badge/Status-In%20Development-yellow.svg)]()
  [![Version](https://img.shields.io/badge/Version-1.0.0-green.svg)]()
  [![React](https://img.shields.io/badge/React-18.3.1-61DAFB.svg)](https://reactjs.org/)
  [![EVM Compatible](https://img.shields.io/badge/EVM-Compatible-blue.svg)](https://ethereum.org/)
  [![Celestia Network](https://img.shields.io/badge/Network-Celestia-purple.svg)](https://celestia.org/)
</div>

🎉 **AIni Pay - Aplicación Multi-Chain Totalmente Funcional!**

---

## 📋 Descripción

**AIni Pay** es una aplicación web3 que combina **inteligencia artificial conversacional** con **transacciones blockchain** en redes **EVM** y **Celestia**.  
Los usuarios pueden transferir criptomonedas con simples comandos de chat en lenguaje natural, sin lidiar con la complejidad de los contratos.

---

## 🌐 Aplicación en Producción

- **URL Principal**: [https://aini-pay.vercel.app/](https://aini-pay.vercel.app/)
- **Plataforma**: Vercel con CI/CD automático desde GitHub
- **Estado**: ✅ Activo 24/7
- **Arquitectura**: Dual → Sonic EVM + Celestia Native

---

## 🔗 Smart Contract en Sonic (EVM)

- **Dirección**: `0x9d7b2eA62b7B9B1c382c1B92e8dd567E6e772090`  
- **Red**: Sonic Mainnet (Chain ID: 146)  
- **Explorador**: [Ver en SonicScan](https://sonicscan.org/address/0x9d7b2ea62b7b9b1c382c1b92e8dd567e6e772090)  
- **Estado**: ✅ Verificado y operativo  
- **Funcionalidad**: Gestión de tokens **S**

---

## 🌌 Celestia Blockchain (Nativo)

- **Tipo**: Transferencias peer-to-peer directas  
- **Mainnet**: `celestia`  
- **Testnet**: `mocha-4`  
- **Estado**: ✅ Integrado y funcional  
- **Ventaja**: Transacciones de **TIA** sin contratos, ultra rápidas y de bajo costo (~0.001 TIA)

---

## 🎯 Características Clave

- 🤖 **IA Conversacional** con **DeepSeek AI**  
- 💳 **Multi-Wallet**: Reown, Keplr y MetaMask  
- 🎨 **UI Horizontal**: Chat con barras laterales scrolleables  
- 🔗 **Cross-Chain Tracking**: Historial unificado  
- 🚀 **Auto-Detection**: Detecta red por formato de dirección  

---

## ⚡ EVM vs Celestia

| Aspecto        | Sonic (EVM) - Contratos | Celestia - Nativo |
|----------------|-------------------------|-------------------|
| **Modelo**     | Smart contracts         | Peer-to-peer      |
| **Gas Fees**   | Variables               | Fijos, muy bajos  |
| **Programación** | Solidity              | Cosmos SDK (Go)   |
| **Uso en AIni Pay** | Tokens **S**        | Tokens **TIA**    |

---

## 👥 Equipo

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="./src/assets/integrantes/yamil.jpg" width="100px" alt="Yamil Navia"/><br />
        <sub><b>Yamil Navia</b></sub><br />
        <sub>Blockchain Dev (Solidity / Rust)</sub>
      </td>
      <td align="center">
        <img src="./src/assets/integrantes/omar.jpg" width="100px" alt="Omar Quispe"/><br />
        <sub><b>Omar Quispe</b></sub><br />
        <sub>AI Dev - Agentes Inteligentes</sub>
      </td>
      <td align="center">
        <img src="./src/assets/integrantes/jhamil.jpg" width="100px" alt="Jhamil Mamani"/><br />
        <sub><b>Jhamil Mamani</b></sub><br />
        <sub>Frontend Dev (React / Tailwind)</sub>
      </td>
    </tr>
  </table>
</div>

---

## 📈 Métricas en Producción

- **IA Response**: < 500ms  
- **Sonic TX**: ~15s  
- **Celestia TX**: ~3s  
- **Uptime**: 99.9% (últimos 30 días)  

---

## 🚀 Instalación

```bash
# Clonar repo
git clone https://github.com/AIni-Pay/Frontend-AIni-Pay.git
cd Frontend-AIni-Pay
```
# Instalar dependencias
```
npm install
```
# Configurar variables
```
echo "VITE_AI_API_KEY=tu_clave_api_ia" >> .env
echo "VITE_WALLETCONNECT_PROJECT_ID=tu_id_proyecto" >> .env
```

# Correr en local
```
npm run dev
```

📜 Licencia

Este proyecto está bajo Licencia MIT. Ver LICENSE
.

🙏 Agradecimientos
```
Ethereum Foundation

Red Celestia

React / Tailwind / Framer Motion

Comunidad Open Source
```
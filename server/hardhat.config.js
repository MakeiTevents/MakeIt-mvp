require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy");
require("solidity-coverage");
require("hardhat-gas-reporter");
require("dotenv").config();

const { ethers } = require("ethers");

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const COINMARKETCAP = process.env.COINMARKETCAP;
const MAIN_NET_RPC_URL = process.env.MAIN_NET_RPC_URL;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      saveDeployments: true,
      chainId: 11155111,
    },
  },
  solidity: {
    compilers: [
      { version: "0.8.7" },
    ],
  },
  gasReporter: {
    enabled: false,
    outputFile: "gasReporter.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COINMARKETCAP,
    token: "ETH",
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_API_KEY,
    },
    customChains: [
      {
        network: "sepolia",
        chainId: 11155111,
        urls: {
          apiURL: "https://api-sepolia.etherscan.io/api",
          browserURL: "https://sepolia.etherscan.io",
        },
      },
    ],
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    user1: {
      default: 1,
    },
  },
  mocha: {
    timeout: 300000,
  },
};

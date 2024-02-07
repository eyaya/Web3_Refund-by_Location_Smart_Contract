require("@nomicfoundation/hardhat-toolbox");
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";
require('dotenv').config();
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/LROCBQe_KDc3i3-JHvht-4miTOAI8xDI",
      accounts: [process.env.PRIVATE_KEY],
    }
  },
  solidity: {
    version: "0.4.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
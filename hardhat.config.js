require("@nomiclabs/hardhat-waffle");

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.3"
      }
    ]
  }
};

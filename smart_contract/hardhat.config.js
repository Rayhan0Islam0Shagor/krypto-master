require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/xwW8rFFNzlH7rdwBRtLnu_JzTh6XYObe',
      accounts: [
        'bd4ae591b2e75b82f8aee5527d622f74e988482db136735167052a958877ee62',
      ],
    },
  },
};

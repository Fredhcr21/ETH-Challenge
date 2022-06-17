const Web3 = require('web3');

class TransactionBalance {
    web3;

    constructor() {
        this.web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/' + '20ad5e39822e4cb0ad072bbee7bd25b0'));
    }

    async viewBalance() {
        let balance = await this.web3.eth.getBalance()
        return balance;
    };
}
    module.exports = {
        TransactionBalance
    }
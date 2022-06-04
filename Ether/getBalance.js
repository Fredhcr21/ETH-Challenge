const Web3 = require('web3');

class TransactionBalance {
    web3;
    account;
    address;

    constructor(account, address) {
        this.web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/' + '20ad5e39822e4cb0ad072bbee7bd25b0'));
        this.account = account;
        this.address = address;
    }

    async viewBalance() {
        let balance = await this.web3.eth.getBalance((await this.web3.eth.getBlockNumber(this.address)))
        let number = balance.number
        let get = await this.web3.eth.getBalance(number, true);
        let transactions = get.transactions[0];
        let EthTransact = {
            balance: transactions
        }
        return EthTransact;
        }
    };

module.exports = {
    TransactionBalance
}
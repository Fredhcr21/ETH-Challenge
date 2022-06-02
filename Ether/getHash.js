const Web3 = require('web3');

class transactionHash {
    web3;
    account;
    
    constructor(account) {
    this.web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/' + '20ad5e39822e4cb0ad072bbee7bd25b0'));
    this.account = account;
    }
    async viewHash() {
        let block = await this.web3.eth.getBlock((await this.web3.eth.getBlockNumber()))
        let number = block.number;
        let get = await this.web3.eth.getBlock(number, true);
        let transactions = get.transactions[0];
        let hash = transactions.hash;
        let getHash = {
            hash: hash,
        }
        return getHash;
    };
};

module.exports = {
    transactionHash
}
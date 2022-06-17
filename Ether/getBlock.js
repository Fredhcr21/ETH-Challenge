const Web3 = require('web3');

class transactionBlock {
    web3;

    constructor() {
    this.web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/' + '20ad5e39822e4cb0ad072bbee7bd25b0'));
}

async viewblock() {
    try {
        let block = await this.web3.eth.getBlock((await this.web3.eth.getBlockNumber()))
        let number = block.number
        let get = await this.web3.eth.getBlock(number, true);
        let transactions = get.transactions[0];
        let EthTransact = {
            block: transactions
        }
        return EthTransact;
    } catch (error) {
        console.log(error); 
    }
}
} 


module.exports = {
    transactionBlock
}


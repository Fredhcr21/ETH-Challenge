const Web3 = require('web3');

class transactionHash {
    web3;
    account;
    
    constructor(account) {
    this.web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/' + '20ad5e39822e4cb0ad072bbee7bd25b0'));
    this.account = account;
}

async viewblock() {
    try {
        let block = await this.web3.eth.getBlock((await this.web3.eth.getBlockNumber()))
        let number = block.number
        let get = await this.web3.eth.getBlock(number, true);
        let transactions = get.transactions;
        let transaction = transactions[0];
        let hash = transaction.hash;
        let blockHash = transaction.blockHash;
        let blockNumber = transaction.blockNumber;
        let from = transaction.from;
        let to = transaction.to;
        let value = transaction.value;
        let gas = transaction.gas;
        let gasPrice = transaction.gasPrice;
        let input = transaction.input;
        let nonce = transaction.nonce;
        let EthTransact = {
            blockHash,
            hash,
            blockNumber,
            from,
            to,
            value,
            gas,
            gasPrice,
            input,
            nonce
        }
        return EthTransact;
    } catch (error) {
        console.log(error); 
    }
}}

const getEther = setInterval(() => {
    let txCheker = new transactionHash(process.env.INFURA_ID, '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4');
    txCheker.viewblock();
},15 * 100); 


module.exports = {
    getEther,
    hash: transactionHash,
    blockHash: transactionHash,
    blockNumber: transactionHash,
}


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
}

async viewGas() {
    let block = await this.web3.eth.getBlock((await this.web3.eth.getBlockNumber()))
    let number = block.number;
    let get = await this.web3.eth.getBlock(number, true);
    let transactions = get.transactions[0];
    let gas = transactions.gas;
    let getGas = {
        gas
    }
    return getGas;
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

const getEther = setInterval(() => {
    let txCheker = new transactionHash(process.env.INFURA_ID, '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4');
    txCheker.viewHash();
    txCheker.viewGas();
    txCheker.viewblock();
}); 


module.exports = {
    viewHash: transactionHash.viewHash,
    getEther

}


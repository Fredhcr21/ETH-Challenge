const Web3 = require('web3');

class transactionBlock {
    web3;
    account;
    
    constructor(account) {
    this.web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/' + '20ad5e39822e4cb0ad072bbee7bd25b0'));
    this.account = account;
}

async viewblock() {
    try {
        let block = await this.web3.eth.getBlock('latest')
        let number = block.number
        let get = await this.web3.eth.getBlock(number, true);
        let transactions = get.transactions[0];
        let EthTransact = {
            block: transactions
        }
        console.log(EthTransact);
    } catch (error) {
        console.log(error); 
    }
}
} 
let txCheker = new transactionBlock(process.env.INFURA_ID, '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4');
setInterval(() => {
    txCheker.viewblock();
}, 600);

module.exports = {
    transactionBlock
}


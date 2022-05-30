const Web3 = require('web3');

class TransactionChecker {
    web3;
    account;

    constructor(account) {
        this.web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/' + '20ad5e39822e4cb0ad072bbee7bd25b0'));
        this.account = account;
    }

    async checkBlock() {
        let block = await this.web3.eth.getBlock('latest');
        let number = block.number;
        console.log('Searching block ' + number);

    //     if (block != null && block.transactions != null) {
    //         for (let txHash of block.transactions) {
    //             let tx = await this.web3.eth.getTransaction(txHash);
    //             if(this.account == tx.to.toLowerCase()) {
    //                 console.log('Transaction found on block: ' + number);
    //                 console.log({address: tx.from, value: this.web3.utils.fromWei(tx.value, 'ether'), timestamp: new Date()});
    //             }
    //         }
    //     }
    }
}

let txCheker = new TransactionChecker(process.env.INFURA_ID, '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4');
setInterval(() => {
    txCheker.checkBlock();
}, 600);

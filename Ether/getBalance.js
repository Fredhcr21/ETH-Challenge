const Web3 = require('web3');

class TransactionNumber {
    web3;
    account;

    constructor(account) {
        this.web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/' + '20ad5e39822e4cb0ad072bbee7bd25b0'));
        this.account = account;
    }

    async checkBlockNumber() {
        let getBalnce = await this.web3.eth.getBalance('0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48');
        console.log(getBalnce);
    }

}

let txCheker = new TransactionNumber(process.env.INFURA_ID, '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4');
setInterval(() => {
    txCheker.checkBlockNumber();
}, 600);
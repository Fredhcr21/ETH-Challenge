const Web3 = require('web3');

class TransactionChecker {
    web3;
    account;

    constructor(account) {
        this.web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/' + '20ad5e39822e4cb0ad072bbee7bd25b0'));
        this.account = account;
    }

    async viewBalance() {
        let balance = await this.web3.eth.getBalance('0x1aD91ee08f21bE3dE0BA2ba6918E714dA6B45836', (await this.web3.eth.defaultBlock));
        console.log(balance);
    }
};

let txCheker = new TransactionChecker(process.env.INFURA_ID, '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4');
setInterval(() => {
    txCheker.viewBalance();
}, 600);

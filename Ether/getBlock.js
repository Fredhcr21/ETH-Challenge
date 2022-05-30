const Web3 = require('web3');

class transactionHash {
    web3;
    account;
    
    constructor(account) {
    this.web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/' + '20ad5e39822e4cb0ad072bbee7bd25b0'));
    this.account = account;
}

async viewblock() {
    let block = await this.web3.eth.getBlock('0x42e30b8be869990bd00c9110af337f05860d3e4bbdddd515ec4310cfd3f95b84', ['0x8d3f41a9f33773522ea89f3b8decd56eb34dfea2b987f1811012e19ee7128840'])
    // let number = block.number
    // let get = await this.web3.eth.getBlock(number, true)
    return block;   
}

}

const getEther = setInterval(() => {
    let txCheker = new transactionHash(process.env.INFURA_ID, '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4');
    txCheker.viewblock();
},15 * 100); 


module.exports = {
    getEther
    
}


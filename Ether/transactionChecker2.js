const Web3 = require('web3');

class TransactionChecker {
    web3;
    web3ws;
    subscription;

    constructor(account) {
        this.web3ws = new Web3(new Web3.providers.WebsocketProvider('wss://mainnet.infura.io/ws/v3/', + '20ad5e39822e4cb0ad072bbee7bd25b0'));
        this.web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/' + '20ad5e39822e4cb0ad072bbee7bd25b0'));
        this.account = account;
    }

    subscribe(topic) {
        this.subscription = this.web3ws.eth.subscribe(topic, (err, res) => {
            if(err) console.log(err);
        });
    }

    whatchTransactions() {
        console.log('Whatching all pending transactions...');
        this.subscription.on('data', (txHash) => {
            setTimeout(async () => {
                try {
                    let tx = await this.web3.eth.getTransaction(txHash);
                    if(tx !== null) {
                        console.log(tx.from);
                        if(this.account == tx.to.toLowerCase()) {
                            console.log({address: tx.from, value: this.web3.utils.fromWei(tx.value, 'ether'), timestamp: new Date()});

                        }
                    }
                } catch(err) {
                    console.error(err)
                }
            }, 6000);
        });
    }
} 
let txChecker = new TransactionChecker(process.env.INFURA_ID, '20ad5e39822e4cb0ad072bbee7bd25b0');
txChecker.subscribe('pendingTransactions');
txChecker.whatchTransactions();
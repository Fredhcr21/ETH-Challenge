import { Router } from "express";

const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/' + '20ad5e39822e4cb0ad072bbee7bd25b0'));

const BalanceRouter = Router();

BalanceRouter.get('/getbalance/:address', (req, res) => {
    address = req.params.address
    try{
        var balance = web3.eth.getBalance(address).then(function (balance) {
            ether_bal = Web3.utils.fromWei(balance, 'ether')
            res.json({  balance: ether_bal })
        }).catch(function(e) {
        });
    }
    catch{
        res.status(400).json({ address: address, message:'failed attempt, please try again' })
    }
        
    
})


module.exports = BalanceRouter;

import { Router } from "express";
const Web3 = require('web3');

const router = Router();

const web3 = new Web3(('https://mainnet.infura.io/v3/20ad5e39822e4cb0ad072bbee7bd25b0'));

router.get('/getBalance/:address', (req, res) => {
    const address = req.params.address
    try {
        const balance = web3.eth.getBalance(address).then(function (balance) {
            const ether = Web3.utils.fromWei(balance, 'ether')
            res.json({ balance: ether })
        })
    } catch (error) {
        res.status(400).json({ address: address, message:'failed attempt, please try again' })
    }
})

module.exports = router;

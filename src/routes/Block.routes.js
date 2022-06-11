import { Router } from "express";
import { getBlock } from "../controllers/Block.controller";

// import { transactionBlock } from "../../Ether/getBlock";

const Web3 = require('web3');
const block = new Web3(('https://mainnet.infura.io/v3/20ad5e39822e4cb0ad072bbee7bd25b0'));

const blockRouter = Router();

blockRouter.get("/block", getBlock);

blockRouter.get("/block/:number", async (req, res) => {
    const number = req.params.number;
    try {
        const numberBlock = await block.eth.getBlock(number)
        res.json(numberBlock)
    } catch (error) {
        console.log(error)
    }
});

module.exports = blockRouter;
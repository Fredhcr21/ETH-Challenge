import { Router } from "express";
import { getBlock } from "../controllers/Block.controller";

// import { transactionBlock } from "../../Ether/getBlock";

const Web3 = require('web3');
const block = new Web3(('https://mainnet.infura.io/v3/20ad5e39822e4cb0ad072bbee7bd25b0'));

const blockRouter = Router();

blockRouter.get("/block", getBlock);

blockRouter.get("/block/:number", async (req, res) => {
    try {
        const numberBlock = await block.eth.getBlock(req.params.number);
        res.json(numberBlock)
    } catch (error) {
        res.status(400).json({ message:'failed attempt, please try again' })
    }
});

module.exports = blockRouter;
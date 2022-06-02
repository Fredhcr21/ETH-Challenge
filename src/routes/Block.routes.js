import { Router } from "express";
import { getBlock, getBlockByNumber } from "../controllers/Block.controller";

const blockRouter = Router();

blockRouter.get("/block", getBlock);
blockRouter.get("/block/:blockNumber", getBlockByNumber);

module.exports = blockRouter;
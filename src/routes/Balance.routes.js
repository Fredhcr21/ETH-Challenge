import { Router } from "express";
import { getBalance } from "../controllers/Balance.controller";

const BalanceRouter = Router();

BalanceRouter.get('/:address', getBalance);

module.exports = BalanceRouter;
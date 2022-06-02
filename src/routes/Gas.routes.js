import { Router } from "express";
import { getGas } from "../controllers/Gas.controller";

const gasRouter = Router();

gasRouter.get("/gas", getGas);

module.exports = gasRouter;
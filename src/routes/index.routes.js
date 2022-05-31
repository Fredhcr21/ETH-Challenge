import { Router } from "express";
import {TransacHash} from "../controllers/index.controller";

const router = Router();

router.get('/', TransacHash);

module.exports = router;
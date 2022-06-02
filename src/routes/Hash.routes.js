import { Router } from 'express'
import {getHash} from '../controllers/Hash.controller'

const hashRouter = Router();

hashRouter.get('/hash', getHash);

module.exports = hashRouter;
import express from "express";

import Ethproducts from './routes/index.routes';


const app = express();

app.use('/eth', Ethproducts)

module.exports = app;
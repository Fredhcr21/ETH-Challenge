import express from "express";
import blockRouter from "./routes/Block.routes";   
import hashRouter from "./routes/Hash.routes";   
import gasRouter from "./routes/Gas.routes";   

const app = express();

app.use('/eth', blockRouter);
app.use('/eth', hashRouter);
app.use('/eth', gasRouter);

module.exports = app;''
import express from "express";
import blockRouter from "./routes/Block.routes";
import hashRouter from "./routes/Hash.routes";
import gasRouter from "./routes/Gas.routes";
import balanceRouter from "./routes/Balance.routes";

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/eth", blockRouter);
app.use("/eth", hashRouter);
app.use("/eth", gasRouter);
app.use("/eth", balanceRouter);

module.exports = app;

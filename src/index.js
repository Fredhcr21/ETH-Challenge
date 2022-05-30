import express from "express";

const router = require('./routes/index.routes');
require('./database/db');

const app = express();

app.use(router)

app.listen(3000);
console.log("listening on port", 3000);
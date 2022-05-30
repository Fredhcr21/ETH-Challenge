import { Schema, model } from "mongoose";

const EtherSchema = new Schema({
    blockHash:{
        type: String,
    },
    hash: {
        type: String,
    }
}, {timestamps: true});

module.exports = model('Ether', EtherSchema);
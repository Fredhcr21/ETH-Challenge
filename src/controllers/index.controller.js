const Ether = require('../models/index');
const {getEther} = require('../../Ether/getBlock');

export const createEther = async (req, res) => {
    const {blockHash, hash} = getEther;

    const newEther = new Ether({blockHash, hash});
    const etherSaved = await newEther.save();

    res.json(etherSaved);
}
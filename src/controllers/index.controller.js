import { hash, blockHash, blockNumber } from "../../Ether/getBlock";

export const TransacHash = async (req, res) => {
    res.json({
        hash
    });
    const getHash = await hash.find({});
    return res.status(200).json(getHash);

}

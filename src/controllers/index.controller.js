import {viewHash} from "../../Ether/getBlock";

export const TransacHash = async (req, res) => {
    res.json({
        hash: await viewHash(),
    });
    const getHash = await hash.find();
    return res.status(200).json(getHash);

}

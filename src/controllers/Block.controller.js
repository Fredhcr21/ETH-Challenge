import { transactionBlock } from "../../Ether/getBlock";

const Block = new transactionBlock(process.env.INFURA_ID, '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4');

export const getBlock = async (req, res) => {
    try {
        const block = await Block.viewblock();
        res.json(block);
    } catch (error) {
        console.log(error);
    }
};



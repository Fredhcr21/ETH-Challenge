import { transactionHash } from "../../Ether/getHash";

const Hash = new transactionHash(process.env.INFURA_ID, '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4');

export const getHash = async (req, res) => {
    try {
        const ether = await Hash.viewHash();
        res.json(ether);
    } catch (error) {
        console.log(error);
    }
}
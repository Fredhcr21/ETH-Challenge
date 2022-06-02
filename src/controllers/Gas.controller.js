import {transactionGas} from "../../Ether/getGas";

const Gas = new transactionGas(process.env.INFURA_ID, '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4');

export const getGas = async (req, res) => {
    try {
        const gas = await Gas.viewGas();
        res.json(gas);
    } catch (error) {
        console.log(error);
    }
};
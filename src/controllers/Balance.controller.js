import { TransactionBalance } from "../../Ether/getBalance";

const Balance = new TransactionBalance(process.env.INFURA_ID, '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4');

export const getBalance = async (req, res) => {
    const balance = await Balance.viewBalance();
    res.json(balance);
}
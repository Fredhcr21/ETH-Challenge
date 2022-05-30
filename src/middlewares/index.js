const {Schema, model} = require('mongoose');
const {getEther} = require('../../Ether/getBlock')

const Hash = new Schema({
    hash: {
        type: String,
        
    }
})

module.exports = {
    Hash
}
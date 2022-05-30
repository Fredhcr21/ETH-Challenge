const {GraphQLSchema} = require('graphql');
const {getEther} = require('../../Ether/getBlock');

const schema = new GraphQLSchema({
    name: 'Schema',
    description: 'Schema for transactionChecker',
    fields: {
        query: {
            // hash: {Grap}
        }
    }
})

module.export = {
    schema
}
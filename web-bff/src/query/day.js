
const graphql = require('graphql');

const dayService = require('../dayService.js')

var MoistureType = new graphql.GraphQLObjectType({
  name: 'Moisture',
  fields: {
    hour: { type: graphql.GraphQLInt },
    moisture: { type: graphql.GraphQLFloat },
  }
});

exports.dayQuery = {
  name: 'DayQuery',
  description: 'Retrieve moisture levels per day',
  type: new graphql.GraphQLList(MoistureType),
  args: {
    day: { type: graphql.GraphQLInt },
    month: { type: graphql.GraphQLInt },
    year: { type: graphql.GraphQLInt },
  },
  resolve: (_, args) => {
    return dayService.getLast24Hours();
  }
};

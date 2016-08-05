
const graphql = require('graphql');

const dayData = require('./day-data.json');

const dayDataArray = Object.keys(dayData).reduce(function(data, key) {
    data.push(dayData[key]);
    return data;
}, []);

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
    return dayDataArray;
  }
};

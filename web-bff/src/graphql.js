'use strict';

const dayData = require('./day-data.json');

const graphql = require('graphql');

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

var dayQuery = {
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

var Schema = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'Root',
    description: 'Root of the Schema',
    fields: {
      day: dayQuery
    }
  })
});

// Your first function handler
module.exports.handler = (event, context, cb) => {
  console.log('Received event', event);

  return graphql.graphql(Schema, event.body.query)
    .then((response) => {
      cb(null, response)
    })
    .catch((error) => {
      cb(error)
    });
}

'use strict';

const graphql = require('graphql');

const dayQuery = require('./query/day').dayQuery;

const schema = exports;

// The main schema
schema.root = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'Root',
    description: 'Root of the Schema',
    fields: {
      day: dayQuery
    }
  })
});

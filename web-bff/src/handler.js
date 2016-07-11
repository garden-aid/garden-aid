'use strict';

var userType = new graphql.GraphQLObjectType({
  name: 'Day',
  fields: {
    hour: { type: graphql.GraphQLString },
    moisture: { type: graphql.GraphQLFloat },
  }
});

// Your first function handler
module.exports.hello = (event, context, cb) => cb(null,
  { message: 'Go Serverless v1.0! Your function executed successfully!', event }
);

// You can add more handlers here, and reference them in serverless.yaml

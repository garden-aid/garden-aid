'use strict';

const graphql = require('graphql');
const schema = require('./schema');

// Your first function handler
module.exports.handler = (event, context, cb) => {
  console.log('Received event', event);

  return graphql.graphql(schema.root, event.body.query)
    .then((response) => {
      cb(null, response)
    })
    .catch((error) => {
      cb(error)
    });
}

var vows = require('vows');

var suite = vows.describe('Garden Aid - Web BFF')

process.env.IS_UNIT_TEST = true;
process.env.SERVERLESS_STAGE = 'unit-test';

require('./graphql')(suite);

module.exports.tests = suite;

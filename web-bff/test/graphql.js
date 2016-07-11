var vows          = require('vows'),
    assert        = require('assert'),
    lambdaWrapper = require('lambda-wrapper');

var graphqlHandler = require('../src/graphql.js');
var handler = lambdaWrapper.wrap(graphqlHandler);

module.exports = function(suite) {
  suite.addBatch({
    "get days": {
      topic: function() {
        handler.run({
          query: `{
            day {
              hour, moisture
            }
          }`,
        }, this.callback);
      },
      "runs": function (err, result) {
        assert.ifError(err);

        console.log(result);
        assert.deepEqual(result, {
          data: {
            day: [{
              "hour": "1",
              "moisture": 1
            },{
              "hour": "2",
              "moisture": 2
            },{
              "hour": "3",
              "moisture": 1
            },{
              "hour": "4",
              "moisture": 0
            }]
          }
        });
      }
    }
  });
}


var BbPromise = require("bluebird");
const tables = require('./tables');

function logError(err) {
  console.log('Error running query', err);
}

function logResults(resp) {
  console.log('Found', resp.Count, 'items');
  console.log(util.inspect(_.pluck(resp.Items, 'attrs')));

  if(resp.ConsumedCapacity) {
    console.log('----------------------------------------------------------------------');
    console.log('Query consumed: ', resp.ConsumedCapacity);
  }
}

function convertResults(resp) {
  return resp.Items;
}

exports.getLast24Hours = function() {
  return tables.Day
    .query('garden-aid-client-test-js')
    .execAsync();
    .then(logResults)
    .then(convertResults)
    .catch(logError);
}

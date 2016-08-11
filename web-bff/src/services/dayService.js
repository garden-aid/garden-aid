
'use strict';

const BbPromise = require('bluebird');
const moment = require('moment');

const tables = require('../dynamodb/tables');

function logError(err) {
  console.log('Error running query', err);
}

function logResults(resp) {
  console.log('Found', resp.Count, 'items');

  if(resp.ConsumedCapacity) {
    console.log('----------------------------------------------------------------------');
    console.log('Query consumed: ', resp.ConsumedCapacity);
  }

  return resp;
}

function convertResults(resp) {
  const result = resp.Items.map(i => {
    return {
      date: i.Data.Recorded,
      moisture: i.Data.Level,
    };
  });

  return result;
}

class DayService {
  constructor(dayTable) {
    this.dayTable = dayTable;
  }

  getLast24Hours() {
    const after = moment().subtract(1, 'days').valueOf();
    console.log('Retreiving records after: ' + after);

    return this.dayTable
      .query('garden-aid-client-test-js')
      .gte(after)
      .execAsync()
      .then(logResults)
      .then(convertResults)
      .catch(logError);
  }
}

module.exports = DayService;

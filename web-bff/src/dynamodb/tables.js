
const vogels = require('vogels-promisified');

var Day = vogels.define('Day', {
  hashKey : 'ClientId',
  rangeKey : 'Timestamp',
  schema : {
    ClientId   : Joi.string(),
    Timestamp   : Joi.date(),
    Data : Joi.string(),
  },
  tableName: 'moisture_data_raw'
});

exports.Day = day;

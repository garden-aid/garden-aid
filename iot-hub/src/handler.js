'use strict';

module.exports.processMoisture = (event, context, cb) => {
  console.log(event);
  cb(null, { message: 'success' });
}

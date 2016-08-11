#!/usr/bin/env node

var _             = require('lodash'),
    awsIot        = require('aws-iot-device-sdk'),
    deviceConfig  = require('./device-config');

var deviceOptions = deviceConfig.options;

console.log('Creating device with options', deviceOptions);

var device = awsIot.device(deviceOptions);

/* example payload
{
  "DeviceId": "1",
  "Recorded": "20160727T160939.473Z",
  "Level": 0.98
}
*/

function publishMoisture(level) {
  console.log('Publishing level', level);
  device.publish('garden/soil/moisture', JSON.stringify({
    DeviceId: 'test-js-device',
    Recorded: (new Date()).toISOString(),
    Level: level
  }));
}


var levels = [ 0.897, 1.9 ];
var initialize = _.once(() => {
  console.log('Initilizing');
  _.forEach(levels, publishMoisture);
});

device
  .on('connect', function() {
    console.log('connect');
    initialize();
  });

device
  .on('close', function() {
     console.log('close');
  });
device
  .on('reconnect', function() {
     console.log('reconnect');
  });
device
  .on('offline', function() {
     console.log('offline');
  });
device
  .on('error', function(error) {
     console.log('error', error);
  });
device
  .on('message', function(topic, payload) {
     console.log('message', topic, payload.toString());
  });

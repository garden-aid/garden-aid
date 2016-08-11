#!/usr/bin/env node

'use strict'

const _             = require('lodash'),
      awsIot        = require('aws-iot-device-sdk'),
      deviceConfig  = require('./device-config');

const deviceOptions = deviceConfig.options;

console.log('Creating device with options', deviceOptions);

const device = awsIot.device(deviceOptions);

/* example payload
{
  "DeviceId": "1",
  "Recorded": "20160727T160939.473Z",
  "Level": 0.98
}
*/
function getRandomLevel(min,max) {
    return Math.random()*(max-min+1)+min;
}

function publishMoisture(level) {
  console.log('Publishing level', level);
  device.publish('garden/soil/moisture', JSON.stringify({
    DeviceId: 'test-js-device',
    Recorded: (new Date()).toISOString(),
    Level: level
  }));
}

function publishRandomMoisture() {
  const level = getRandomLevel(0, 5);
  publishMoisture(level);
}

const interval = 1000 * 60 * 1; // one minute

const initialize = _.once(() => {
  console.log('Initilizing');
  publishRandomMoisture();
  setTimeout(publishRandomMoisture, interval);
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

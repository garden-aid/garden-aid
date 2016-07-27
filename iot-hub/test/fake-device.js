
var awsIot = require('aws-iot-device-sdk');
var deviceConfig = require('./device-config');


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
device
  .on('connect', function() {
    console.log('connect');
    device.publish('garden/soil/moisture', JSON.stringify({
      Recorded: Date.UTC(),
      Level: 0.897
    }));
  });

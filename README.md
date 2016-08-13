# garden-aid
A serverless IOT project for my garden

## Environments
* Production - [https://dashboard.garden-aid.io/](https://dashboard.garden-aid.io/)
* Development - [https://garden-aid-dev.firebaseapp.com/](https://garden-aid-dev.firebaseapp.com/)

## Architecture
Architecture diagram (chat-bff yet to be designed)

![Architecture](https://github.com/johncmckim/garden-aid/raw/master/docs/images/architecure.png)

// TODO: Explain planned architecture

### Services
#### Web Front-end
[![Build Status](https://travis-ci.org/garden-aid/web-client.svg?branch=master)](https://travis-ci.org/garden-aid/web-client)

React app hosted on firebase.
Uses the Apollo-Client to access the GraphQl backend.

See [code](https://github.com/garden-aid/web-client)

#### Web Backend for Front-end
[![Build Status](https://travis-ci.org/garden-aid/web-bff.svg?branch=master)](https://travis-ci.org/garden-aid/web-bff)

Backend for web client. Exposes a GraphQl endpoint.

See [code](https://github.com/garden-aid/web-bff)

#### Chat Backend
[![Build Status](https://travis-ci.org/garden-aid/chat-bff.svg?branch=master)](https://travis-ci.org/garden-aid/chat-bff)

TODO:

See [code](https://github.com/garden-aid/chat-bff)

#### IoT Hub
[![Build Status](https://travis-ci.org/garden-aid/iot-hub.svg?branch=master)](https://travis-ci.org/garden-aid/iot-hub)

IoT hub to collect data from devices

See [code](https://github.com/garden-aid/iot-hub)

#### Sensors

See [javascript code](https://github.com/garden-aid/sensor-thing-javascript)
See [device code](https://github.com/garden-aid/sensor-thing-device)

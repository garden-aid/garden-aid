# garden-aid
A serverless IOT project for my garden

## Environments
* [Prod](https://garden-aid-production.firebaseapp.com/)
* [Dev](https://garden-aid-dev.firebaseapp.com/)

## Architecture
Architecture diagram (chat-bff yet to be designed)

![Architecture](https://github.com/johncmckim/garden-aid/raw/master/docs/images/architecure.png)

// TODO: Explain planned architecture

### Services
#### Web Front-end
React app hosted on firebase.
Uses the Apollo-Client to access the GraphQl backend.

See [code](https://github.com/garden-aid/web-client)

#### Web Backend for Front-end
Backend for web client. Exposes a GraphQl endpoint.

See [code](https://github.com/garden-aid/web-bff)

#### Chat Backend
TODO:

See [code](https://github.com/garden-aid/chat-bff)

#### IoT Hub
IoT hub to collect data from devices

See [code](https://github.com/garden-aid/iot-hub)

#### Sensors

See [javascript code](https://github.com/garden-aid/sensor-thing-javascript)
See [device code](https://github.com/garden-aid/sensor-thing-device)

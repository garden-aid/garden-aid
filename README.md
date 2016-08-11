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

#### Web Backend for Front-end
Backend for web client. Exposes a GraphQl endpoint.

#### Chat Backend
TODO:

#### IoT Hub
IoT hub to collect data from devices

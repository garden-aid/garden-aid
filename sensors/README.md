# Code for sensors

# Process
## Install
* Driver - CH340G or CP2102
* - CP2102: https://www.silabs.com/products/mcu/Pages/USBtoUARTBridgeVCPDrivers.aspx
* - CH340G: http://www.wemos.cc/downloads/
* - https://github.com/nodemcu/nodemcu-devkit/tree/master/Drivers
* CoolTerm - http://freeware.the-meiers.org/
* Get firmware - http://nodemcu-build.com/
* Flashing - esptool

* Install arduino ide - https://www.arduino.cc/en/Main/Software - 10.11

* Arduino IDE - https://learn.sparkfun.com/tutorials/esp8266-thing-hookup-guide/installing-the-esp8266-arduino-addon

* screen /dev/tty.xxxx 115200 - to log into device

## Research
### Getting started
* https://github.com/nodemcu/nodemcu-devkit/wiki/Getting-Started-on-OSX
* http://www.cnx-software.com/2015/10/29/getting-started-with-nodemcu-board-powered-by-esp8266-wisoc/
* http://www.foobarflies.io/a-simple-connected-object-with-nodemcu-and-mqtt/
* https://www.cloudmqtt.com/docs-nodemcu.html


* http://www.averagemanvsraspberrypi.com/2015/11/esp8266-node-mcu-setup.html

* Driver issues - https://github.com/nodemcu/nodemcu-devkit-v1.0/issues/2

### Node MCU Firmware Builds
* http://nodemcu-build.com/


### MQTT
#### MQTT Client
* http://www.foobarflies.io/a-simple-connected-object-with-nodemcu-and-mqtt/
* https://github.com/esp8266/Arduino/issues/889
* https://github.com/Imroy/pubsubclient - https://github.com/knolleary/pubsubclient/issues/84
* https://github.com/awslabs/aws-sdk-arduino - https://github.com/svdgraaf/aws-sdk-arduino
* https://github.com/odelot/aws-mqtt-websockets

#### MQTT Server
* AWS IOT Hub - unsure if will work with NodeMCU
* http://mosquitto.org/

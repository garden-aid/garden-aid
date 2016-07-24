#!/bin/bash
set -e

DEVICE_PORT="$1"
if [ -z $DEVICE_PORT ]; then
  echo 'Please pass the device port as the first argument';
  echo 'e.g. /dev/cu.wchusbserial1410';
  exit 1;
fi

echo "Flashing device on port $DEVICE_PORT"

FIRMWARE_FOLDER="./firmware"
FIRMWARE_PATH="$FIRMWARE_FOLDER/nodemcu-1.5.1-float-ssl-mqtt.bin"

echo "Flashing with firmware $FIRMWARE_PATH"

# or -fm qio -f 4m
esptool.py --port "$DEVICE_PORT" --baud 9600 write_flash -fm dio -fs 32m 0x00000 "$FIRMWARE_PATH"
#esptool.py --port "$DEVICE_PORT" --baud 9600 write_flash -fm qio -fs 4m 0x00000 "$FIRMWARE_PATH"

echo "Done."

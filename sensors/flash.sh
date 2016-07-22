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
FIRMWARE_PATH="$FIRMWARE_FOLDER/nodemcu-1.5.1-float.bin"

echo "Flashing with firmware $FIRMWARE_PATH"

esptool.py --port "$DEVICE_PORT" write_flash 0x00000 "$FIRMWARE_PATH"

echo "Done."

#!/bin/bash

DEVICE_PORT="$1"
if [ -z ${DEVICE_PORT+x} ]; {
  echo 'Please pass the device port as the first argument'
  echo 'e.g. /dev/tty.wchusbserial1410'
  exit 1
}

FIRMWARE_FOLDER="../firmware"
FIRMWARE_PATH="$FIRMWARE_FOLDER/nodemcu-1.5.1-integer.bin"

python esptool.py --port $DEVICE_PORT write_flash 0x00000 $FIRMWARE_PATH

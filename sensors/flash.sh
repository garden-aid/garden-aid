#!/bin/bash

DEVICE_PORT=/dev/ttyUSB0

FIRMWARE_FOLDER="../firmware"
FIRMWARE_PATH="$FIRMWARE_FOLDER/nodemcu-1.5.1-integer.bin"

python esptool.py --port $DEVICE_PORT write_flash 0x00000 $FIRMWARE_PATH
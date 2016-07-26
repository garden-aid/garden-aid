#!/bin/bash
set -e

DEVICE_PORT="$1"
MODULE_SIZE="$2"

if [ -z $DEVICE_PORT ]; then
  echo 'Please pass the device port as the first argument';
  echo 'e.g. /dev/cu.wchusbserial1410';
  exit 1;
fi

if [ -z $MODULE_SIZE ]; then
  echo 'Please pass a module size as the second argument: 512 or 4096';
  exit 1;
fi

echo "Flashing device on port $DEVICE_PORT"

FIRMWARE_FOLDER="../firmware"
FIRMWARE_PATH="$FIRMWARE_FOLDER/nodemcu-1.5.1-float.bin"

ESP_INIT_PATH="$FIRMWARE_FOLDER/esp_init_data_default-1.5.4.bin"

if [[ "$MODULE_SIZE" -eq "512" ]] ;then
  FILE_MODE="qio"
  FILE_SIZE="4m"
  ESP_INIT_ADDRESS="0x7c000"
elif [[ "$MODULE_SIZE" -eq "4096" ]] ; then
  FILE_MODE="dio"
  FILE_SIZE="32m"
  ESP_INIT_ADDRESS="0x3fc000"
else
  echo "Unknown module size: $MODULE_SIZE"
  exit 1;
fi

echo "Flashing with firmware $FIRMWARE_PATH and $ESP_INIT_PATH"

esptool.py \
  --port "$DEVICE_PORT" \
  write_flash \
  -fm $FILE_MODE \
  -fs $FILE_SIZE \
  0x00000 "$FIRMWARE_PATH" \
  $ESP_INIT_ADDRESS "$ESP_INIT_PATH"

echo "Done."

#!/bin/bash
set -e

DEVICE_PORT="$1"
if [ -z $DEVICE_PORT ]; then
  echo 'Please pass the device port as the first argument';
  echo 'e.g. /dev/cu.wchusbserial1410';
  exit 1;
fi

SRC_FOLDER=../src/webserver

UPLOADER="luatool"
#UPLOADER="nodemcu-uploader"

echo "Deploying code to $DEVICE_PORT using $UPLOADER"

if [[ "$UPLOADER" == "luatool" ]]; then
  LUATOOL_PATH=./tools/luatool/luatool/luatool.py

  python $LUATOOL_PATH --baud 9600 --port $DEVICE_PORT --src "$SRC_FOLDER/application.lua" --dest "application.lua"
  python $LUATOOL_PATH --baud 9600 --port $DEVICE_PORT --src "$SRC_FOLDER/config.lua" --dest "config.lua"
  python $LUATOOL_PATH --baud 9600 --port $DEVICE_PORT --src "$SRC_FOLDER/setup.lua" --dest "setup.lua"
  python $LUATOOL_PATH --baud 9600 --port $DEVICE_PORT --src "$SRC_FOLDER/main.lua" --dest "main.lua" --dofile
elif [[ "$UPLOADER" == "nodemcu-uploader" ]]; then
  cd "$SRC_FOLDER"
  nodemcu-uploader --verbose --port "$DEVICE_PORT" upload application.lua config.lua main.lua setup.lua --compile
else
  echo "Unknown uploader: $UPLOADER"
  exit 1;
fi

echo 'Done'

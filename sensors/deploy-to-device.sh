#!/bin/bash
set -e

DEVICE_PORT="$1"
if [ -z $DEVICE_PORT ]; then
  echo 'Please pass the device port as the first argument';
  echo 'e.g. /dev/tty.wchusbserial1410';
  exit 1;
fi

echo "Deploying code to $DEVICE_PORT"

LUATOOL_PATH=./luatool/luatool/luatool.py
SRC_FOLDER=./src

INIT_PATH="$SRC_FOLDER/webserver.lua"

echo "Deploying $INIT_PATH"

python $LUATOOL_PATH --port $DEVICE_PORT --src $INIT_PATH --dest init.lua --verbose --restart

echo 'Done'

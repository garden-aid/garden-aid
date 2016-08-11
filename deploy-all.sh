#!/bin/bash
set -e

WORKING_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

bash "$WORKING_DIR/iot-hub/deploy.sh"
bash "$WORKING_DIR/web-bff/deploy.sh"
bash "$WORKING_DIR/web/deploy.sh"

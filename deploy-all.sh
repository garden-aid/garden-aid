#!/bin/bash
set -e

WORKING_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

if [[ $TRAVIS_PULL_REQUEST == "true" ]]; then
  echo "Not deploying on pull request"
  exit 1;
fi

BRANCH=${TRAVIS_BRANCH:-$(git rev-parse --abbrev-ref HEAD)}

if [[ $BRANCH == 'master' ]]; then
  STAGE="prod"
elif [[ $BRANCH == 'develop' ]]; then
  STAGE="dev"
fi

if [ -z ${STAGE+x} ]; then
  echo "Not deploying changes";
  exit 0;
fi

echo "Deploying stage from branch $BRANCH to $STAGE"

cd "$WORKING_DIR/iot-hub"
. "./deploy.sh"

#cd "$WORKING_DIR/chat-bff"
#. "./deploy.sh"

cd "$WORKING_DIR/web-bff"
. "./deploy.sh"

cd "$WORKING_DIR/web"
. "./deploy.sh"

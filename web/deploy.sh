#!/bin/bash
set -e

STAGE=${STAGE:-dev}

echo "Deploying to stage $STAGE"

if [ $STAGE -eq 'prod' ] ; then
  npm run build
  firebase deploy -P garden-aid
else
  npm run build:dev
  firebase deploy -P garden-aid-dev
fi

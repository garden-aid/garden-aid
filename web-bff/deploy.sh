#!/bin/bash
set -e

STAGE=${STAGE:-dev}
AWS_REGION=${AWS_REGION:-ap-southeast-2}

sls deploy --stage $STAGE --region $AWS_REGION

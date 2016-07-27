#!/bin/bash
set -e
CERTIFICATES_FOLDER="../../certificates"

ROOT_CA_PEM_PATH="$CERTIFICATES_FOLDER/root/ca.pem"

DEVICE_CERT_FOLDER="$CERTIFICATES_FOLDER/devices"
KEY_FILENAME="$DEVICE_CERT_FOLDER/device-cert.key"
CRT_FILENAME="$DEVICE_CERT_FOLDER/832d90ad4a-certificate.pem.crt"

openssl s_client \
  -host data.iot.us-west-2.amazonaws.com \
  -port 8883 \
  -cert $CRT_FILENAME \
  -key $KEY_FILENAME \
  -CAfile $ROOT_CA_PEM_PATH \
  -msg \
  -verify 1

#!/bin/bash
set -e

CERTIFICATES_FOLDER="../../certificates/root"

mkdir -p $CERTIFICATES_FOLDER

ROOT_CA_KEY_PATH="$CERTIFICATES_FOLDER/ca.key"
ROOT_CA_PEM_PATH="$CERTIFICATES_FOLDER/ca.pem"

openssl genrsa -out "$ROOT_CA_KEY_PATH" 2048

openssl req \
  -x509 \
  -new \
  -nodes \
  -key "$ROOT_CA_KEY_PATH" \
  -sha256 \
  -days 1024 \
  -out "$ROOT_CA_PEM_PATH"

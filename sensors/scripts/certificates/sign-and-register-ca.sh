#!/bin/bash
set -e
CERTIFICATES_FOLDER="../../certificates/root"

mkdir -p $CERTIFICATES_FOLDER

ROOT_CA_KEY="$CERTIFICATES_FOLDER/ca.key"
ROOT_CA_PEM="$CERTIFICATES_FOLDER/ca.pem"

PK_VERIFICATION_KEY="$CERTIFICATES_FOLDER/pk-verification.key"
PK_VERIFICATION_CSR="$CERTIFICATES_FOLDER/pk-verification.csr"
PK_VERIFICATION_CRT="$CERTIFICATES_FOLDER/pk-verification.crt"

echo 'Getting registration code'
aws iot get-registration-code

echo 'You must use the registration code in the CommonName of the verification certificate'

echo 'Generating verification certificate'
openssl genrsa -out "$PK_VERIFICATION_KEY" 2048
openssl req -new -key "$PK_VERIFICATION_KEY" -out "$PK_VERIFICATION_CSR"

echo 'Signing verification certificate'
openssl x509 -req \
  -in "$PK_VERIFICATION_CSR" \
  -CA "$ROOT_CA_PEM" \
  -CAkey "$ROOT_CA_KEY" \
  -CAcreateserial \
  -out "$PK_VERIFICATION_CRT" \
  -days 500 \
  -sha256

echo 'Registering ca certificate'
aws iot register-ca-certificate \
  --ca-certificate "file://$ROOT_CA_PEM" \
  --verification-cert "file://$PK_VERIFICATION_CRT"

echo 'Run `aws iot update-ca-certificate --certificate-id xxxxxxxxxxx --new-status ACTIVE` to activate your cert'

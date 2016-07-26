#!/bin/bash
set -e
CERTIFICATES_FOLDER="../../certificates/root"

mkdir -p $CERTIFICATES_FOLDER

ROOT_CA_KEY_PATH="$CERTIFICATES_FOLDER/ca.key"
ROOT_CA_PEM_PATH="$CERTIFICATES_FOLDER/ca.pem"

PK_VERIFICATION_CERT="$CERTIFICATES_FOLDER/pk-verification.key"
PK_VERIFICATION_CSR="$CERTIFICATES_FOLDER/pk-verification.csr"
PK_VERIFICATION_CRT="$CERTIFICATES_FOLDER/pk-verification.csr"

echo 'Getting registration code'
aws iot get-registration-code

echo 'You must use the registration code in the CommonName of the verification certificate'

echo 'Generating verification certificate'
openssl genrsa -out $PK_VERIFICATION_CERT 2048
openssl req -new -key $PK_VERIFICATION_CERT -out $PK_VERIFICATION_CSR

openssl x509 -req \
  -in $PK_VERIFICATION_CSR \
  -CA $ROOT_CA_PEM_PATH \
  -CAkey $ROOT_CA_KEY_PATH \
  -CAcreateserial \
  -out $PK_VERIFICATION_CRT \
  -days 500 \
  –sha256

echo 'Registering ca certificate'
aws iot register-ca-certificate \
  -—ca-certificate "file://$ROOT_CA_PEM_PATH" \
  -—verification-cert "file://$PK_VERIFICATION_CRT"

#aws iot update-ca-certificate --certificate-id xxxxxxxxxxx --new-status ACTIVE

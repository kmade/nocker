#!/usr/bin/env bash
set -eu

SSL_PATH="./configuration/ssl"

openssl genrsa -passout pass:1111 -des3 -out $SSL_PATH/ca.key 4096
openssl req -passin pass:1111 -new -x509 -days 365 -key $SSL_PATH/ca.key -out $SSL_PATH/ca.crt -subj  "/C=NL/ST=Amsterdam/L=Amsterdam/O=Test/OU=Test/CN=ca"


openssl genrsa -passout pass:1111 -des3 -out $SSL_PATH/server.key 4096
openssl req -passin pass:1111 -new -key $SSL_PATH/server.key -out $SSL_PATH/server.csr -subj  "/C=NL/ST=Amsterdam/L=Amsterdam/O=Test/OU=Server/CN=localhost"


openssl x509 -req -passin pass:1111 -days 365 -in $SSL_PATH/server.csr -CA $SSL_PATH/ca.crt -CAkey $SSL_PATH/ca.key -set_serial 01 -out $SSL_PATH/server.crt

openssl rsa -passin pass:1111 -in $SSL_PATH/server.key -out $SSL_PATH/server.key

openssl genrsa -passout pass:1111 -des3 -out $SSL_PATH/client.key 4096

openssl req -passin pass:1111 -new -key $SSL_PATH/client.key -out $SSL_PATH/client.csr -subj  "/C=NL/ST=Amsterdam/L=Amsterdam/O=Test/OU=Client/CN=localhost"

openssl x509 -passin pass:1111 -req -days 365 -in $SSL_PATH/client.csr -CA $SSL_PATH/ca.crt -CAkey $SSL_PATH/ca.key -set_serial 01 -out $SSL_PATH/client.crt

openssl rsa -passin pass:1111 -in $SSL_PATH/client.key -out $SSL_PATH/client.key

openssl dhparam -out $SSL_PATH/dhparams.pem 2048

cat $SSL_PATH/server.key $SSL_PATH/server.crt $SSL_PATH/dhparams.pem > $SSL_PATH/chain.pem

#!/usr/bin/env bash
printf "Configuring localstack components..."

readonly LOCALSTACK_URL=http://localstack:4566

sleep 5;

set -x

aws configure set aws_access_key_id test
aws configure set aws_secret_access_key test
echo "[default]" > ~/.aws/config
echo "region = us-east-1" >> ~/.aws/config
echo "output = json" >> ~/.aws/config

aws --endpoint-url=$LOCALSTACK_URL sqs create-queue --queue-name main_queue
aws --endpoint-url=$LOCALSTACK_URL sqs create-queue --queue-name main_dlq

aws --endpoint-url=$LOCALSTACK_URL ssm put-parameter --name "/local/arn/queue/main" --value "arn:aws:sqs:us-east-1:000000000000:main_queue" --type "String" --overwrite
aws --endpoint-url=$LOCALSTACK_URL ssm put-parameter --name "/local/arn/queue/dlq" --value "arn:aws:sqs:us-east-1:000000000000:main_dlq" --type "String" --overwrite
aws --endpoint-url=$LOCALSTACK_URL ssm put-parameter --name "/local/vpc/sg" --value "sg-055032a13d5c654de" --type "String" --overwrite
aws --endpoint-url=$LOCALSTACK_URL ssm put-parameter --name "/local/private/subnet/1" --value "subnet-05ab9dae2f26dda6e" --type "String" --overwrite
aws --endpoint-url=$LOCALSTACK_URL ssm put-parameter --name "/local/private/subnet/2" --value "subnet-0ccfe985f30e9cacf" --type "String" --overwrite
aws --endpoint-url=$LOCALSTACK_URL ssm put-parameter --name "/local/private/subnet/3" --value "subnet-0e4588e44ae402a32" --type "String" --overwrite

set +x

printf "Localstack component configuration finished"

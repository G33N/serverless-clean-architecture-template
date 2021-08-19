# LocalStack SSM

## SSM: Basic usage

Run the following commands to create required parameters:

```shell
aws --endpoint-url=http://localhost:4566 ssm put-parameter --profile localstack --name "/docker/arn/queue/main" --value "arn:aws:sqs:us-east-1:000000000000:main_queue" --type "String" --overwrite
aws --endpoint-url=http://localhost:4566 ssm put-parameter --profile localstack --name "/docker/arn/queue/dlq" --value "arn:aws:sqs:us-east-1:000000000000:main_dlq" --type "String" --overwrite
aws --endpoint-url=http://localhost:4566 ssm put-parameter --profile localstack --name "/docker/vpc/sg" --value "sg-055032a13d5c654de" --type "String" --overwrite
aws --endpoint-url=http://localhost:4566 ssm put-parameter --profile localstack --name "/docker/private/subnet/1" --value "subnet-05ab9dae2f26dda6e" --type "String" --overwrite
aws --endpoint-url=http://localhost:4566 ssm put-parameter --profile localstack --name "/docker/private/subnet/2" --value "subnet-0ccfe985f30e9cacf" --type "String" --overwrite
aws --endpoint-url=http://localhost:4566 ssm put-parameter --profile localstack --name "/docker/private/subnet/3" --value "subnet-0e4588e44ae402a32" --type "String" --overwrite
```

To check active parameters:

```shell
aws --endpoint-url=http://localhost:4566 ssm get-parameters-by-path --path "/docker" --profile localstack --recursive
```

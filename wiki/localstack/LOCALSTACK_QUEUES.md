# LocalStack Queues

## Queues: Basic usage

Run the following commands to create required queues:

```shell
aws --endpoint-url=http://localhost:4566 sqs create-queue --profile localstack --queue-name main_queue
aws --endpoint-url=http://localhost:4566 sqs create-queue --profile localstack --queue-name main_dlq
```

To check active queues:

```shell
aws --endpoint-url=http://localhost:4566 sqs list-queues --profile localstack
```

To send message:

```shell
aws --endpoint-url=http://localhost:4566 sqs send-message-batch --profile localstack --queue-url http://localhost:4566/000000000000/main_queue --entries file://fixtures/send-message-batch.json
```

To receive message:

```shell
aws --endpoint-url=http://localhost:4566 sqs receive-message --profile localstack --queue-url http://localhost:4566/000000000000/main_queue
aws --endpoint-url=http://localhost:4566 sqs receive-message --profile localstack --queue-url http://localhost:4566/000000000000/main_dlq
```

To purge queues:

```shell
aws --endpoint-url=http://localhost:4566 sqs purge-queue --profile localstack --queue-url http://localhost:4566/000000000000/main_queue
aws --endpoint-url=http://localhost:4566 sqs purge-queue --profile localstack --queue-url http://localhost:4566/000000000000/main_dlq
```

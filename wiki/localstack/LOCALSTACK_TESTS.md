# LocalStack tests

To test the function that is invoked by API Gateway, just execute the following command:

```shell
curl -d '{"name": "Marcos"}' -H "Content-Type: application/json" -X POST http://localhost:4566/restapis/{itemId}/local/_user_request_/hello
```

To test the function that is invoked by SQS, just execute the following command:

```shell
aws --endpoint-url=http://localhost:4566 sqs send-message-batch --profile localstack --queue-url http://localhost:4566/000000000000/main_queue --entries file://fixtures/send-message-batch.json
```

Verify that the message from the queue has been consumed and that there are no messages in the DLQ:

```shell
aws --endpoint-url=http://localhost:4566 sqs receive-message --profile localstack --queue-url http://localhost:4566/000000000000/main_queue
aws --endpoint-url=http://localhost:4566 sqs receive-message --profile localstack --queue-url http://localhost:4566/000000000000/main_dlq
```

# Serverless usage

## To deploy the serverless stack locally

To deploy the functions in the LocalStack run the following command

```shell
serverless deploy
```

To check the service deployed successfully. Run the following commands

```shell
serverless info
aws --endpoint-url=http://localhost:4566 apigateway get-rest-apis --profile localstack
aws --endpoint-url=http://localhost:4566 apigateway get-resources --rest-api-id {itemId} --profile localstack
```

To watch logs for every function:

```shell
serverless logs -f hello -s docker -t
```

To invoke the function locally. Run the following command

```shell
serverless invoke local -f hello -p fixtures/hello.json
```

## To deploy the serverless stack in production

Run in terminal

```shell
sls deploy --aws-profile ${awsProfile}
```

Replace **${awsProfile}** with your AWS profile. For example:

```
sls deploy --aws-profile aws-mna-profile
```

# LocalStack usage

## Solve the first time

Run the following command to configure AWS CLI basic credentials

```shell
aws configure --profile localstack
```

Fill with the following information

```shell
AWS Access Key ID [None]: test
AWS Secret Access Key [None]: test
Default region name [None]: us-east-1
Default output format [None]: json
```

To verify that the profile was created correctly:

```shell
cat ~/.aws/credentials
```

You should see the following content:

```shell
[localstack]
aws_access_key_id = test
aws_secret_access_key = test
```

## To run LocalStack

To run the docker container

```shell
docker-compose up -d
```

To check all the services type the following URL in the browser

```shell
curl http://localhost:4566
curl http://localhost:4566/health
```

To stop all services

```shell
docker-compose down
```

## References

- [Main site](https://localstack.cloud/)
- [Docker Hub](https://hub.docker.com/r/localstack/localstack)
- [Serverless LocalStack Lambda](https://onexlab-io.medium.com/serverless-localstack-lambda-53fd8d46983)
- [Docker Compose LocalStack](https://onexlab-io.medium.com/docker-compose-localstack-fadee1e88a49)
- [Serverless LocalStack Lambda API Gateway](https://onexlab-io.medium.com/serverless-localstack-lambda-api-gateway-7fad63d9a9eb)

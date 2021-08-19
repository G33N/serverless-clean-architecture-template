# Serverless logs

## Latest logs

To display the latest logs, run in terminal

```shell
sls logs -f ${functionName} --aws-profile ${awsProfile}
```

Replace **${functionName}** with function name and **${awsProfile}** with your AWS profile. For example:

```shell
sls logs -f hello --aws-profile indigo-dev
```

## Real time logs

```shell
sls logs -f hello -t --aws-profile indigo-dev
```

### Locally

```shell
serverless logs -f hello -s local -t
```

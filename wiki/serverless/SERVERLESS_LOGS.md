# Serverless logs

## Latest logs

To display the latest logs, run in terminal

```shell
sls logs -f ${functionName} --aws-profile ${awsProfile}
```

Replace **${functionName}** with function name and **${awsProfile}** with your AWS profile. For example:

```shell
sls logs -f world --aws-profile aws-mna-profile
```

## Real time logs

```shell
sls logs -f world -t --aws-profile aws-mna-profile
```

### Locally

```shell
serverless logs -f world -s local -t
```

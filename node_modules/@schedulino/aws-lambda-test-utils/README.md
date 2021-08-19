# aws-lambda-test-utils

[![Build Status](https://travis-ci.org/schedulino/aws-lambda-test-utils.svg?branch=master)](https://travis-ci.org/schedulino/aws-lambda-test-utils)

AWS Lambda mock event objects for most common AWS services.

## Installation

```
$ npm install --save-dev @schedulino/aws-lambda-test-utils
```

## Use in your Tests

```js
import {
  apiGatewayEventMock,
  apiGatewayProxyResultMock,
  contextMock,
} from '@schedulino/aws-lambda-test-utils';

const apiGatewayEvent = apiGatewayEventMock();
const apiGatewayProxyResult = apiGatewayProxyResultMock();
const context = contextMock();
```

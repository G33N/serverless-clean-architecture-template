/* eslint-disable no-template-curly-in-string */

import type { AWS } from "@serverless/typescript";

import {
  custom,
  environment,
  packageConfig,
  statements,
  vpc,
} from "./config/serverless";
import * as functions from "./src";

const serverlessConfiguration: AWS = {
  service: "template-serverless-localstack",
  frameworkVersion: "2",
  variablesResolutionMode: "20210326",
  custom,
  plugins: [
    "serverless-webpack",
    "serverless-prune-plugin",
    "serverless-localstack",
    "serverless-deployment-bucket",
  ],
  package: packageConfig,
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    deploymentPrefix: "serverless",
    region: "us-east-1",
    stage: "${opt:stage, 'local'}",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment,
    lambdaHashingVersion: "20201221",
    tracing: {
      lambda: true,
    },
    vpc,
    iam: {
      role: {
        statements,
      },
    },
    deploymentBucket: {
      name: "${file(package.json):name}-bucket",
      serverSideEncryption: "AES256",
    },
  },
  // import the function via paths
  functions,
};

module.exports = serverlessConfiguration;

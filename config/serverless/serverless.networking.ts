/* eslint-disable no-template-curly-in-string */

import { AwsLambdaVpcConfig } from '@serverless/typescript';

export const vpc: AwsLambdaVpcConfig = {
  securityGroupIds: ['${self:custom.variables.serverlessSecurityGroup}'],
  subnetIds: ['${self:custom.variables.privateSubnet1}', '${self:custom.variables.privateSubnet2}', '${self:custom.variables.privateSubnet3}'],
};

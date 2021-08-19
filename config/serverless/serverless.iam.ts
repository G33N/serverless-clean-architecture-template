import { AwsIamPolicyStatements } from '@serverless/typescript';

export const statements: AwsIamPolicyStatements = [
  {
    Effect: 'Allow',
    Action: ['xray:PutTraceSegments', 'xray:PutTelemetryRecords'],
    Resource: '*',
  },
  {
    Effect: 'Allow',
    Action: ['ssm:GetParameters'],
    Resource: '*',
  },
];

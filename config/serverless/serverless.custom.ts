/* eslint-disable no-template-curly-in-string */

export const custom: { [k: string]: unknown } = {
  webpack: {
    webpackConfig: './webpack.config.ts',
    includeModules: true,
    keepoutputDirectory: true,
    packager: 'yarn', // Packager that will be used to package your external modules
    excludeFiles: 'src/**/*.test.[t|j]s', // Exclude test files
  },
  prune: {
    // automatically prune old lambda versions
    automatic: true,
    number: 3, // Number of versions to keep
  },
  variables: {
    mainQueue: "${ssm:/${self:provider.stage}/arn/queue/main, 'arn:aws:sqs:us-east-1:000000000000:main_queue'}",
    mainDLQ: "${ssm:/${self:provider.stage}/arn/queue/dlq, 'arn:aws:sqs:us-east-1:000000000000:main_dlq'}",
    serverlessSecurityGroup: "${ssm:/${self:provider.stage}/vpc/sg, 'sg-055032a13d5c654de'}",
    privateSubnet1: "${ssm:/${self:provider.stage}/private/subnet/1, 'subnet-05ab9dae2f26dda6e'}",
    privateSubnet2: "${ssm:/${self:provider.stage}/private/subnet/2, 'subnet-0ccfe985f30e9cacf'}",
    privateSubnet3: "${ssm:/${self:provider.stage}/private/subnet/3, 'subnet-0e4588e44ae402a32'}",
  },
  localstack: {
    stages: ['local'],
    endpointFile: 'config/localstack_endpoints.json',
  },
  deploymentBucket: {
    versioning: false,
  },
};

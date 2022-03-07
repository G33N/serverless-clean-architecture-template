/* eslint-disable no-template-curly-in-string */

export const environment = {
  AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
  ENV: "${self:provider.stage}",
  REGION: "${self:provider.region}",
  SLS_DEBUG: "*",
};

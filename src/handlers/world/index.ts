/* eslint-disable no-template-curly-in-string */
import { handlerPath } from 'src/framework/libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      sqs: '${self:custom.variables.mainQueue}',
    },
  ],
  destinations: {
    onFailure: '${self:custom.variables.mainDLQ}',
  },
};

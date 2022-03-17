import { JSONSchemaType } from 'ajv';
import { HelloMessage } from '@hello/domain/helloMessage';

export const helloSchema: JSONSchemaType<HelloMessage> = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    surname: { type: 'string', nullable: true },
  },
  required: ['name'],
};

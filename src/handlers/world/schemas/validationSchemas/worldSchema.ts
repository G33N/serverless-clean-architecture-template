import { JSONSchemaType } from 'ajv';
import { WorldMessage } from '../../entities/worldMessage';

export const worldSchema: JSONSchemaType<WorldMessage> = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    surname: { type: 'string', nullable: true },
  },
  required: ['name'],
};

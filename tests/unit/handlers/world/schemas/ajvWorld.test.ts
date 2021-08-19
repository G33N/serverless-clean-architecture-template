import Ajv from 'ajv';
import { worldSchema } from 'src/handlers/world/schemas/validationSchemas';
import { worldStub } from 'tests/stubs/world.stub';

describe('ajv world schema validation', () => {
  it('should return true when passing a valid body', () => {
    const ajv = new Ajv({ allErrors: true, verbose: true });
    const validate = ajv.compile(worldSchema);
    const response = validate(worldStub);
    expect(response).toBeTruthy();
  });
});

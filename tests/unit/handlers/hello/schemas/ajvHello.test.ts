import Ajv from 'ajv';
import { helloSchema } from 'src/handlers/hello/schemas/validationSchemas';
import { helloStub } from 'tests/stubs/hello.stub';

describe('ajv hello schema validation', () => {
  it('should return true when passing a valid body', () => {
    const ajv = new Ajv({ allErrors: true, verbose: true });
    const validate = ajv.compile(helloSchema);
    const response = validate(helloStub);
    expect(response).toBeTruthy();
  });
});

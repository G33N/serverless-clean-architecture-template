import Ajv, { JSONSchemaType, AnySchema } from 'ajv';
import { InvalidBodySchemaException, MalformedSchemaException } from '../domain/exceptions/business';
import { BodyValidatorInterface, LoggerScope } from '../domain';
import { Logger } from '../domain/logger';

const functionName = 'validateSchema';

export const validateSchema =
  <T>(schema: JSONSchemaType<T>, defsSchemaArray?: AnySchema | AnySchema[]): BodyValidatorInterface =>
  (body: any) => {
    const logger = new Logger(functionName, LoggerScope.RequestValidation);
    logger.info({ message: `The function '${functionName}' was invoked`, body });

    let validate;

    try {
      const ajv = new Ajv();

      if (defsSchemaArray) {
        ajv.addSchema(defsSchemaArray);
      }

      validate = ajv.compile(schema);
    } catch (error) {
      logger.error({ error });
      throw new MalformedSchemaException(error);
    }

    if (!validate(body)) {
      logger.error({ errors: validate.errors });
      throw new InvalidBodySchemaException(validate.errors);
    }
  };

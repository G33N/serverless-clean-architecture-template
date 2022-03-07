import { BodyValidatorInterface, UseCaseInterface } from 'src/framework/contracts';
import { basicApiGatewayHandler } from 'src/framework/controllers/apiGateway';
import { validateSchema } from 'src/framework/libs/validateSchema';
import { bodyParser } from 'src/framework/libs/bodyParser';
import { customExceptionsMatcher } from 'src/customExceptions';
import { useCaseHello } from './useCases/hello';
import { helloSchema } from './schemas/validationSchemas';
import { HelloMessage } from './entities/helloMessage';

const useCase: UseCaseInterface<HelloMessage> = useCaseHello();
const customBodyValidator: BodyValidatorInterface = validateSchema(helloSchema);
const parseBody = bodyParser(HelloMessage, customBodyValidator);

export const main = basicApiGatewayHandler(parseBody, useCase, customExceptionsMatcher);

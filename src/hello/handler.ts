import { BodyValidatorInterface, UseCaseInterface } from '@shared/domain';
import { basicApiGatewayHandler } from '@shared/application/apiGateway';
import { validateSchema } from '@shared/application/validateSchema';
import { bodyParser } from '@shared/application/bodyParser';
import { customExceptionsMatcher } from '@shared/domain';
import { useCaseHello } from '@hello/application/hello';
import { helloSchema } from '@hello/domain/validationSchemas';
import { HelloMessage } from '@hello/domain/helloMessage';

const useCase: UseCaseInterface<HelloMessage> = useCaseHello();
const customBodyValidator: BodyValidatorInterface = validateSchema(helloSchema);
const parseBody = bodyParser(HelloMessage, customBodyValidator);

export const main = basicApiGatewayHandler(parseBody, useCase, customExceptionsMatcher);

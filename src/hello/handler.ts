import { BodyValidatorInterface, UseCaseInterface } from "src/shared/contracts";
import { basicApiGatewayHandler } from "src/shared/controllers/apiGateway";
import { validateSchema } from "src/shared/libs/validateSchema";
import { bodyParser } from "src/shared/libs/bodyParser";
import { customExceptionsMatcher } from "src/shared/customExceptions";
import { useCaseHello } from "./application/hello";
import { helloSchema } from "./domain/schemas/validationSchemas";
import { HelloMessage } from "./domain/entities/helloMessage";

const useCase: UseCaseInterface<HelloMessage> = useCaseHello();
const customBodyValidator: BodyValidatorInterface = validateSchema(helloSchema);
const parseBody = bodyParser(HelloMessage, customBodyValidator);

export const main = basicApiGatewayHandler(
  parseBody,
  useCase,
  customExceptionsMatcher
);

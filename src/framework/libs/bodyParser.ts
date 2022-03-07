import { plainToClass } from "class-transformer";
import {
  InvalidJsonException,
  NullBodyException,
} from "../exceptions/business";
import {
  BodyParserInterface,
  BodyValidatorInterface,
  ClassConstructor,
  LoggerScope,
} from "../contracts";
import { Logger } from "../logger";

const functionName = "bodyParser";

export const bodyParser =
  <T>(
    classConstructor: ClassConstructor<T>,
    customBodyValidator?: BodyValidatorInterface
  ): BodyParserInterface<T> =>
  (rawBody: any): T => {
    const logger = new Logger(functionName, LoggerScope.RequestValidation);
    logger.info({
      message: `The function '${functionName}' was invoked`,
      rawBody,
    });

    if (rawBody === null) {
      const error = {
        message: "The body was not defined",
        data: rawBody,
      };

      logger.error({ error });

      throw new NullBodyException(error);
    }

    let parsed: any;

    try {
      parsed = typeof rawBody === "string" ? JSON.parse(rawBody) : rawBody;
    } catch {
      const error = {
        message: "The body is invalid",
        data: rawBody,
      };

      logger.error({ error });

      throw new InvalidJsonException(error);
    }

    if (customBodyValidator) {
      customBodyValidator(parsed);
    }

    return plainToClass(classConstructor, parsed);
  };

import { LoggerScope, UseCaseInterface } from "src/shared/contracts";
import { Logger } from "src/shared/logger";
import { HelloMessage } from "../entities/helloMessage";

const useCaseName = "hello";

/**
 * Use case.
 */
export const useCaseHello =
  (): UseCaseInterface<HelloMessage> =>
  async (body: HelloMessage): Promise<any> => {
    const logger = new Logger(useCaseName, LoggerScope.UseCase);
    logger.info({
      message: `The use case function '${useCaseName}' was invoked`,
      body,
    });

    return {
      message: "Go Serverless! Your function was executed successfully!",
    };
  };

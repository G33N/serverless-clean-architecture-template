import { LoggerScope, UseCaseInterface } from 'src/framework/contracts';
import { Logger } from 'src/framework/logger';
import { WorldMessage } from '../entities/worldMessage';

const useCaseName = 'world';

/**
 * Use case.
 */
export const useCaseWorld =
  (): UseCaseInterface<WorldMessage> =>
  async (body: WorldMessage): Promise<void> => {
    const logger = new Logger(useCaseName, LoggerScope.UseCase);
    logger.info({ message: `The use case function '${useCaseName}' was invoked`, body });
  };

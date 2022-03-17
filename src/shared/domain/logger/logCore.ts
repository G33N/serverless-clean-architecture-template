import pino from 'pino';
import { LoggerScope, LoggerSource } from '../contracts';

const logger = pino();

const logFactory = (scopeName: string, scopeType: LoggerScope, source?: LoggerSource): pino.Logger =>
  scopeName && scopeType ? logger.child({ scopeName, scopeType, source }) : logger;

export { logFactory, logger };

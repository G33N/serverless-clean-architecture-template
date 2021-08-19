import * as pino from 'pino';
import { LoggerInterface, LoggerScope, LoggerSource } from 'src/framework/contracts';
import { logFactory } from './logCore';

export class Logger implements LoggerInterface {
  private logger: pino.Logger;

  public constructor(scopeName: string, scopeType: LoggerScope, source?: LoggerSource) {
    this.logger = logFactory(scopeName, scopeType, source);
  }

  public fatal(message: any): void {
    this.logger.fatal(message);
  }

  public error(message: any): void {
    this.logger.error(message);
  }

  public warning(message: any): void {
    this.logger.warn(message);
  }

  public info(message: any): void {
    this.logger.info(message);
  }

  public debug(message: any): void {
    this.logger.debug(message);
  }
}

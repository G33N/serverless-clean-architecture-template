import { SQSHandler, Context, SQSEvent, SQSRecord, Callback } from 'aws-lambda';
import { handleMultiplePromises } from './handleMultiplePromises';
import { LocaleService } from './localeService';
import { BodyParserInterface, LoggerScope, LoggerSource, UseCaseInterface } from '../domain';
import { Logger } from '../domain/logger';

const processRecord = async <T>(parseBody: BodyParserInterface<T>, useCase: UseCaseInterface<T>, record: SQSRecord): Promise<void> => {
  const parsed = parseBody(record.body);
  await useCase(parsed);
};

const processRecords = async <T>(parseBody: BodyParserInterface<T>, useCase: UseCaseInterface<T>, records: SQSRecord[]): Promise<void> => {
  const promises = [];

  for (const record of records) {
    promises.push(processRecord(parseBody, useCase, record));
  }

  await handleMultiplePromises(promises);
};

export const basicSqsHandler =
  <T>(parseBody: BodyParserInterface<T>, useCase: UseCaseInterface<T>): SQSHandler =>
  async (event: SQSEvent, context: Context, callback: Callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    new LocaleService().setLocale('en-US');

    const logger = new Logger(context.functionName, LoggerScope.Handler, LoggerSource.SQS);
    logger.info({ message: `The AWS lambda function '${context.functionName}' was invoked`, event });

    const records = event.Records !== undefined ? event.Records : [];

    try {
      await processRecords(parseBody, useCase, records);
      callback();
    } catch (error) {
      callback(error);
    }
  };

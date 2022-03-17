import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";
import { StatusCodes } from "http-status-codes";
import { ApiGatewayPresenter } from "../presentation/apiGatewayPresenter";
import { LocaleService } from "./localeService";
import { Logger } from "../domain/logger";
import {
  UseCaseInterface,
  BusinessExceptions,
  BaseHttpException,
  ExceptionsMatcherInterface,
  LoggerScope,
  LoggerSource,
  BodyParserInterface,
} from "../domain";
import { exceptionsMatcher } from "../domain/exceptions/exceptionsMatcher";
import { InternalServerException } from "../domain/exceptions/presentation";

export const basicApiGatewayHandler =
  <T>(
    parseBody: BodyParserInterface<T>,
    useCase: UseCaseInterface<T>,
    em: ExceptionsMatcherInterface = exceptionsMatcher
  ): APIGatewayProxyHandler =>
  async (
    event: APIGatewayProxyEvent,
    context: Context
  ): Promise<APIGatewayProxyResult> => {
    context.callbackWaitsForEmptyEventLoop = false;
    new LocaleService().setLocale(
      event.headers !== undefined
        ? event.headers["Accept-Language"] || "en-US"
        : "en-US"
    );

    const logger = new Logger(
      context.functionName,
      LoggerScope.Handler,
      LoggerSource.ApiGateway
    );
    logger.info({
      message: `The AWS lambda function '${context.functionName}' was invoked`,
      event,
    });

    const presenter = new ApiGatewayPresenter();
    const rawBody = event.body !== undefined ? event.body : event;

    try {
      const parsed = parseBody(rawBody);
      const result = await useCase(parsed);
      return presenter.success(result, StatusCodes.OK);
    } catch (error) {
      if (error instanceof BusinessExceptions)
        return presenter.error(em(error));
      if (error instanceof BaseHttpException) return presenter.error(error);
      return presenter.error(new InternalServerException(error));
    }
  };

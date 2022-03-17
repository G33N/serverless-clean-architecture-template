import { StatusCodes } from 'http-status-codes';
import { PresenterInterface, BaseHttpException } from '@shared/domain/contracts';
import { LocaleService } from '@shared/application/localeService';
import { APIGatewayProxyResult } from 'aws-lambda';

const headers = { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' };

const formatApiGatewayResponse = (response: Record<string, unknown>, statusCode = StatusCodes.OK): APIGatewayProxyResult => ({
  statusCode,
  headers,
  body: JSON.stringify(response),
});

/**
 * Implementation of the presenters service for AWS API Gateway service.
 */
export class ApiGatewayPresenter implements PresenterInterface {
  private readonly localeService: LocaleService;

  constructor() {
    this.localeService = new LocaleService();
  }

  success = (
    details: any = {},
    httpStatus = StatusCodes.OK,
    message: string = this.localeService.translate('SUCCESS.DEFAULT'),
  ): APIGatewayProxyResult =>
    formatApiGatewayResponse(
      {
        message,
        details,
      },
      httpStatus,
    );

  error = ({ message, errorCode, details, httpStatus, reprocessable }: BaseHttpException): APIGatewayProxyResult =>
    formatApiGatewayResponse(
      {
        message,
        errorCode,
        details,
        reprocessable,
      },
      httpStatus,
    );

  successPaginate = (
    details: any = {},
    total: number,
    lastEvaluatedIndex: string,
    httpStatus = StatusCodes.OK,
    message: string = this.localeService.translate('SUCCESS.DEFAULT'),
  ): APIGatewayProxyResult =>
    formatApiGatewayResponse(
      {
        message,
        total,
        lastEvaluatedIndex,
        details,
      },
      httpStatus,
    );
}

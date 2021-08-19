import { StatusCodes } from 'http-status-codes';
import { APIGatewayProxyResult } from 'aws-lambda';
import { BaseHttpException } from './baseHttpException';

/**
 * Presenters contract.
 */
export interface PresenterInterface {
  /**
   * Successful presenters for a presenters.
   * @param _body presenters body.
   * @param _httpStatus presenters apiGateway status that will be returned.
   * @param _message localized message.
   */
  success(_body: any, _httpStatus: StatusCodes, _message: string): APIGatewayProxyResult;

  /**
   * Successful presenters for a presenters with pagination.
   * @param _body presenters body.
   * @param _total total number of items in the body.
   * @param _lastEvaluatedIndex last id that was evaluated on the paginated presenters.
   * @param _httpStatus presenters apiGateway status that will be returned.
   * @param _message localized message.
   */
  successPaginate(_body: any, _total: number, _lastEvaluatedIndex: string, _httpStatus: StatusCodes, _message: string): APIGatewayProxyResult;

  /**
   * Error presenters for a presenters.
   * @param _error a {@link BaseHttpException} that will be returned after the presenters was processed.
   */
  error(_error: BaseHttpException): APIGatewayProxyResult;
}

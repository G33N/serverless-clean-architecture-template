/* eslint-disable max-classes-per-file */
import { StatusCodes } from "http-status-codes";
import { BaseHttpException, BusinessExceptions } from "src/shared/contracts";

/**
 * Exception for internal server errors.
 */
export class InternalServerException extends BaseHttpException {
  constructor(businessError: BusinessExceptions) {
    super(
      businessError.message,
      StatusCodes.INTERNAL_SERVER_ERROR,
      businessError.errorCode,
      businessError.reprocessable,
      businessError.details
    );
  }
}

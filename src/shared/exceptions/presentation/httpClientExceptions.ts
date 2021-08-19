/* eslint-disable max-classes-per-file */
import { StatusCodes } from "http-status-codes";
import { BaseHttpException, BusinessExceptions } from "src/shared/contracts";

/**
 * Exception for bad requests.
 */
export class BadRequestException extends BaseHttpException {
  constructor(businessError: BusinessExceptions) {
    super(
      businessError.message,
      StatusCodes.BAD_REQUEST,
      businessError.errorCode,
      businessError.reprocessable,
      businessError.details
    );
  }
}

/**
 * Exception for unprocessable entity.
 */
export class UnprocessableEntityException extends BaseHttpException {
  constructor(businessError: BusinessExceptions) {
    super(
      businessError.message,
      StatusCodes.UNPROCESSABLE_ENTITY,
      businessError.errorCode,
      businessError.reprocessable,
      businessError.details
    );
  }
}

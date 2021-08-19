import { getReasonPhrase, StatusCodes } from 'http-status-codes';

export class BaseHttpException extends Error {
  public httpStatus: StatusCodes;

  public errorCode: string;

  public reprocessable: boolean = true;

  public details: any;

  constructor(message: string, httpStatus: StatusCodes, errorCode: string, reprocessable: boolean = true, details: any = null) {
    super(message);
    this.httpStatus = httpStatus || StatusCodes[httpStatus];
    this.errorCode = errorCode;
    this.reprocessable = reprocessable;
    this.details = details || { reason: getReasonPhrase(httpStatus) };
  }
}

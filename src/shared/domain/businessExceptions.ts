export class BusinessExceptions extends Error {
  public errorCode: string;

  public reprocessable: boolean = true;

  public details: any;

  constructor(message: string, errorCode: string, reprocessable: boolean = true, details: any = null) {
    super(message);
    this.errorCode = errorCode;
    this.reprocessable = reprocessable;
    this.details = details;
  }
}

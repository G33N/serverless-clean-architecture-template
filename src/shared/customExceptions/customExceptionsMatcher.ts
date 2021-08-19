import {
  ExceptionsMatcherInterface,
  BusinessExceptions,
  BaseHttpException,
} from "src/shared/contracts";
import { exceptionsMatcher } from "src/shared/exceptions/exceptionsMatcher";

export const customExceptionsMatcher: ExceptionsMatcherInterface = (
  businessException: BusinessExceptions
): BaseHttpException => {
  return exceptionsMatcher(businessException);
};

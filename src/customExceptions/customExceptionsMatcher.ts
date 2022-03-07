import { ExceptionsMatcherInterface, BusinessExceptions, BaseHttpException } from 'src/framework/contracts';
import { exceptionsMatcher } from 'src/framework/exceptions/exceptionsMatcher';

export const customExceptionsMatcher: ExceptionsMatcherInterface = (businessException: BusinessExceptions): BaseHttpException => {
  return exceptionsMatcher(businessException);
};

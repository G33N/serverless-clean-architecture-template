import { ExceptionsMatcherInterface, BusinessExceptions, BaseHttpException } from '@shared/domain';
import { exceptionsMatcher } from '@shared/domain/exceptions/exceptionsMatcher';

export const customExceptionsMatcher: ExceptionsMatcherInterface = (businessException: BusinessExceptions): BaseHttpException => {
  return exceptionsMatcher(businessException);
};

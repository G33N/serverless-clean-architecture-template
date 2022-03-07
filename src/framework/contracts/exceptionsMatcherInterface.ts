import { BusinessExceptions } from './businessExceptions';
import { BaseHttpException } from './baseHttpException';

export interface ExceptionsMatcherInterface {
  (businessException: BusinessExceptions): BaseHttpException;
}

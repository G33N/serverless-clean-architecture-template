import { ExceptionsMatcherInterface, BusinessExceptions, BaseHttpException } from '../contracts';
import {
  DeletedEntityException,
  EntityNotFoundException,
  InvalidFormatException,
  InvalidParamsException,
  NotImplementedMethodException,
  NullBodyException,
  MalformedSchemaException,
  NonexistentEnvVarException,
} from './business';
import { BadRequestException, UnprocessableEntityException, InternalServerException } from './presentation';

export const exceptionsMatcher: ExceptionsMatcherInterface = (businessException: BusinessExceptions): BaseHttpException => {
  let httpException: BaseHttpException;

  switch (true) {
    case businessException instanceof NullBodyException:
      httpException = new BadRequestException(businessException);
      break;
    case businessException instanceof InvalidParamsException:
      httpException = new BadRequestException(businessException);
      break;
    case businessException instanceof InvalidFormatException:
      httpException = new BadRequestException(businessException);
      break;
    case businessException instanceof EntityNotFoundException:
      httpException = new UnprocessableEntityException(businessException);
      break;
    case businessException instanceof DeletedEntityException:
      httpException = new UnprocessableEntityException(businessException);
      break;
    case businessException instanceof NotImplementedMethodException:
      httpException = new InternalServerException(businessException);
      break;
    case businessException instanceof MalformedSchemaException:
      httpException = new InternalServerException(businessException);
      break;
    case businessException instanceof NonexistentEnvVarException:
      httpException = new InternalServerException(businessException);
      break;
    default:
      httpException = new InternalServerException(businessException);
      break;
  }

  return httpException;
};

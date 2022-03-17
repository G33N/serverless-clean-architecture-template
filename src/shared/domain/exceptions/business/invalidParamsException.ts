import { BusinessExceptions } from '@shared/domain';
import { LocaleService } from '@shared/application/localeService';

/**
 * Exception for requests with invalid parameters.
 */
export class InvalidParamsException extends BusinessExceptions {
  constructor(details: any = null) {
    super(new LocaleService().translate('ERROR.INVALID_PARAMS'), '2', false, details);
  }
}

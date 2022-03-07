import { BusinessExceptions } from 'src/framework/contracts';
import { LocaleService } from 'src/framework/locale/localeService';

/**
 * Exception for requests with invalid body format.
 */
export class InvalidFormatException extends BusinessExceptions {
  constructor(details: any = null) {
    super(new LocaleService().translate('ERROR.INVALID_FORMAT'), '3', false, details);
  }
}

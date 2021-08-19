import { LocaleService } from 'src/framework/locale/localeService';
import { InvalidFormatException } from './invalidFormatException';

/**
 * Exception for requests with invalid JSON body.
 */
export class InvalidJsonException extends InvalidFormatException {
  constructor(details: any = null) {
    super(details || new LocaleService().translate('ERROR.INVALID_JSON'));
  }
}

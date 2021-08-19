import { BusinessExceptions } from 'src/framework/contracts';
import { LocaleService } from 'src/framework/locale/localeService';

/**
 * Exception for requests without body.
 */
export class NullBodyException extends BusinessExceptions {
  constructor(details: any = null) {
    super(new LocaleService().translate('ERROR.NULL_BODY'), '1', false, details);
  }
}

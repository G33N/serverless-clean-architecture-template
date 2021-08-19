import { BusinessExceptions } from 'src/framework/contracts';
import { LocaleService } from 'src/framework/locale/localeService';

/**
 * Exception for default server errors.
 */
export class DefaultServerException extends BusinessExceptions {
  constructor(details: any = null) {
    super(new LocaleService().translate('ERROR.DEFAULT'), '7', true, details);
  }
}

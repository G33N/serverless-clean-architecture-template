import { BusinessExceptions } from '@shared/domain';
import { LocaleService } from '@shared/application/localeService';

/**
 * Exception for default server errors.
 */
export class DefaultServerException extends BusinessExceptions {
  constructor(details: any = null) {
    super(new LocaleService().translate('ERROR.DEFAULT'), '7', true, details);
  }
}

import { BusinessExceptions } from 'src/framework/contracts';
import { LocaleService } from 'src/framework/locale/localeService';

/**
 * Exception for entity not found error.
 */
export class EntityNotFoundException extends BusinessExceptions {
  constructor(details: any = null) {
    super(new LocaleService().translate('ERROR.ENTITY_NOT_FOUND'), '4', false, details);
  }
}

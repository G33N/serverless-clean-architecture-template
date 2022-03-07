import { BusinessExceptions } from 'src/framework/contracts';
import { LocaleService } from 'src/framework/locale/localeService';

/**
 * Exception for entity is deleted.
 */
export class DeletedEntityException extends BusinessExceptions {
  constructor(details: any = null) {
    super(new LocaleService().translate('ERROR.ENTITY_DELETED'), '5', false, details);
  }
}

import { LocaleService } from '@shared/application/localeService';
import { BusinessExceptions } from '@shared/domain';

/**
 * Exception for malformed schema.
 */
export class MalformedSchemaException extends BusinessExceptions {
  constructor(details: any = null) {
    super(new LocaleService().translate('ERROR.MALFORMED_SCHEMA'), '9', true, details);
  }
}

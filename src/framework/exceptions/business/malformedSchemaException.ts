import { LocaleService } from 'src/framework/locale/localeService';
import { BusinessExceptions } from 'src/framework/contracts';

/**
 * Exception for malformed schema.
 */
export class MalformedSchemaException extends BusinessExceptions {
  constructor(details: any = null) {
    super(new LocaleService().translate('ERROR.MALFORMED_SCHEMA'), '9', true, details);
  }
}

import { BusinessExceptions } from '@shared/domain';
import { LocaleService } from '@shared/application/localeService';

/**
 * Exception for contract methods that were not implemented.
 */
export class NonexistentEnvVarException extends BusinessExceptions {
  constructor(details: any = null) {
    super(new LocaleService().translate('ERROR.NONEXISTENT_ENV_VAR'), '10', true, details);
  }
}

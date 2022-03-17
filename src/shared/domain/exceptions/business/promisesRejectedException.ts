import { BusinessExceptions } from '@shared/domain';
import { LocaleService } from '@shared/application/localeService';

/**
 * Exception for PromiseRejectedResult.
 */
export class PromisesRejectedException extends BusinessExceptions {
  constructor(results: PromiseRejectedResult[]) {
    super(
      new LocaleService().translate('ERROR.PARALLEL_PROCESSING'),
      '8',
      true,
      results.map((error) => error.reason),
    );
  }
}

import { BusinessExceptions } from "src/shared/contracts";
import { LocaleService } from "src/shared/locale/localeService";

/**
 * Exception for default server errors.
 */
export class DefaultServerException extends BusinessExceptions {
  constructor(details: any = null) {
    super(new LocaleService().translate("ERROR.DEFAULT"), "7", true, details);
  }
}

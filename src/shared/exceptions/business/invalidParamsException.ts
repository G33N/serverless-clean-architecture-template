import { BusinessExceptions } from "src/shared/contracts";
import { LocaleService } from "src/shared/locale/localeService";

/**
 * Exception for requests with invalid parameters.
 */
export class InvalidParamsException extends BusinessExceptions {
  constructor(details: any = null) {
    super(
      new LocaleService().translate("ERROR.INVALID_PARAMS"),
      "2",
      false,
      details
    );
  }
}

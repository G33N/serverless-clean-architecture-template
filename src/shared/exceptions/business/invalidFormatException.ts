import { BusinessExceptions } from "src/shared/contracts";
import { LocaleService } from "src/shared/locale/localeService";

/**
 * Exception for requests with invalid body format.
 */
export class InvalidFormatException extends BusinessExceptions {
  constructor(details: any = null) {
    super(
      new LocaleService().translate("ERROR.INVALID_FORMAT"),
      "3",
      false,
      details
    );
  }
}

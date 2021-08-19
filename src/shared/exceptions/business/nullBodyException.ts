import { BusinessExceptions } from "src/shared/contracts";
import { LocaleService } from "src/shared/locale/localeService";

/**
 * Exception for requests without body.
 */
export class NullBodyException extends BusinessExceptions {
  constructor(details: any = null) {
    super(
      new LocaleService().translate("ERROR.NULL_BODY"),
      "1",
      false,
      details
    );
  }
}

import { BusinessExceptions } from "src/shared/contracts";
import { LocaleService } from "src/shared/locale/localeService";

/**
 * Exception for contract methods that were not implemented.
 */
export class NotImplementedMethodException extends BusinessExceptions {
  constructor(details: any = null) {
    super(
      new LocaleService().translate("ERROR.NOT_IMPLEMENTED_METHOD"),
      "6",
      true,
      details
    );
  }
}

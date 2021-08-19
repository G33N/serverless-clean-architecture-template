import { LocaleService } from "src/shared/locale/localeService";
import { BusinessExceptions } from "src/shared/contracts";

/**
 * Exception for malformed schema.
 */
export class MalformedSchemaException extends BusinessExceptions {
  constructor(details: any = null) {
    super(
      new LocaleService().translate("ERROR.MALFORMED_SCHEMA"),
      "9",
      true,
      details
    );
  }
}

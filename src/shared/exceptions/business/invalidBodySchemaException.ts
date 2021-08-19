import { LocaleService } from "src/shared/locale/localeService";
import { InvalidFormatException } from "./invalidFormatException";

/**
 * Exception for requests with invalid JSON schema.
 */
export class InvalidBodySchemaException extends InvalidFormatException {
  constructor(details: any = null) {
    super(
      details || new LocaleService().translate("ERROR.INVALID_BODY_SCHEMA")
    );
  }
}

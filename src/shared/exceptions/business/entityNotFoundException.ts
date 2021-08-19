import { BusinessExceptions } from "src/shared/contracts";
import { LocaleService } from "src/shared/locale/localeService";

/**
 * Exception for entity not found error.
 */
export class EntityNotFoundException extends BusinessExceptions {
  constructor(details: any = null) {
    super(
      new LocaleService().translate("ERROR.ENTITY_NOT_FOUND"),
      "4",
      false,
      details
    );
  }
}

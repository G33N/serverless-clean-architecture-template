import { BusinessExceptions } from "src/shared/contracts";
import { LocaleService } from "src/shared/locale/localeService";

/**
 * Exception for entity is deleted.
 */
export class DeletedEntityException extends BusinessExceptions {
  constructor(details: any = null) {
    super(
      new LocaleService().translate("ERROR.ENTITY_DELETED"),
      "5",
      false,
      details
    );
  }
}

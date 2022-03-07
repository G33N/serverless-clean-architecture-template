/* eslint-disable no-underscore-dangle */
import i18n from 'i18n';

import config from 'config/locales/locale-service.json';
import { LocaleServiceInterface } from '../contracts';

i18n.configure(config);

/**
 * Implementation of i18n as the locale service.
 */
export class LocaleService implements LocaleServiceInterface {
  translate(key: string) {
    return i18n.__(key);
  }

  translatePlural(key: string, count: number) {
    return i18n.__n(key, count);
  }

  setLocale(locale: string) {
    i18n.setLocale(locale);
  }
}

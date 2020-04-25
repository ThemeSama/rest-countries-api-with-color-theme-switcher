import Controller from '@ember/controller';
import { isArray } from '@ember/array';

export default class DetailController extends Controller {

  // country currencies
  get currencies() {
    let currencies = this.country.currencies,
      list = '';

    // join currency names
    if( isArray(currencies) ) {
      list = currencies.map(currency => currency.name).join(', ');
    }

    return list;
  }

  // country languages
  get languages() {
    let languages = this.country.languages,
      list = '';

    // join currency names
    if( isArray(languages) ) {
      list = languages.map(lang => lang.name).join(', ');
    }

    return list;
  }
}

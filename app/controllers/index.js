import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
  @tracked countries;
  @tracked filterText;
  @tracked filterRegion;

  @action
  filterCountries(key) {
    let keyMatch = new RegExp(key, 'gi');
    this.countries = this.model.filter(country => {
      //without region filter
      if( !this.filterRegion ) {
        return country.name.match(keyMatch);
      }
      
      // with region filter
      return country.name.match(keyMatch) && country.region.startsWith(this.filterRegion);
    });
  }

  @action
  filterByRegion(region) {
    // set region filter
    this.filterRegion = region;

    // call filter method
    this.filterCountries(this.filterText);
  }
}

import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
  @tracked countries;
  @tracked filterText;

  @action
  filterByName(key) {
    let keyMatch = new RegExp(key, 'gi');
    this.countries = this.model.filter(country => {
      return country.name.match(keyMatch);
    });
  }

  @action
  filterByRegion(region) {
    this.filterText = '';
    this.countries = this.model.filter(country => {
      return country.region.startsWith(region);
    });
  }
}

import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SelectRegionComponent extends Component {
  @tracked regionText = 'Filter by Region';
  @tracked regionFilter = false;
  @tracked dropdown = false;
  regionList = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  bindMouse = this.outsideClick.bind(null, this);

  // close dropdown
  outsideClick(select, event) {
    if (event.defaultPrevented) {
      return;
    }

    if (!(event.target.closest(".region-select"))) {
      select.toggleDropdown();
    }
  }

  @action
  toggleDropdown() {
    this.dropdown = !this.dropdown;

    // add or remove event for dropdown
    if( this.dropdown ) {
      document.addEventListener('mousedown', this.bindMouse);
    } else {
      document.removeEventListener('mousedown', this.bindMouse);
    }
  }

  @action
  filterByRegion(region) {
    // set region title
    this.regionText = region;

    //
    this.regionFilter = true;

    this.toggleDropdown();

    // call filter func
    this.args.filter(region);
  }

  @action
  clearRegion() {
    // set default title
    this.regionText = 'Filter by Region';

    //
    this.regionFilter = false;

    this.toggleDropdown();

    //call filter func
    this.args.filter('');
  }
}

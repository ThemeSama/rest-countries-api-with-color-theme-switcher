import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CountryCardComponent extends Component {
  @tracked status = 'img-loading';
  
  // population separators
  get population() {
    // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
    return this.args.country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  @action
  imgLoaded(e) {
    let img = e.target,
      imgWidth = img.offsetWidth,
      imgHeight = img.offsetHeight,
      containerWidth = img.parentNode.offsetWidth,
      containerHeight = img.parentNode.offsetHeight;

    // check flag size
    if( imgWidth < containerWidth ) {
      img.classList.add('fix-width');
    } else if( imgHeight < containerHeight ) {
      img.classList.add('fix-height');
    }

    // add loaded class
    this.status = 'img-loaded';
  }
}

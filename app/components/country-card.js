import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CountryCardComponent extends Component {
  @tracked status = 'img-loading';

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

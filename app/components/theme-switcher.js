import Component from '@glimmer/component';
import { action } from '@ember/object';
import { storageFor } from 'ember-local-storage';

export default class ThemeSwitcherComponent extends Component {
  @storageFor('theme') theme;

  get dark() {
    return this.theme.get('dark');
  }

  constructor(owner, args) {
    super(owner, args);

    // check theme with local storage
    if( this.theme.get('dark') ) {
      document.body.classList.toggle('dark-mode');
    }
  }

  @action
  changeTheme() {
    let dark = this.theme.get('dark');

    // update local storage
    this.theme.set('dark', !dark);

    // change theme
    document.body.classList.toggle('dark-mode');
  }
}

import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ThemeSwitcherComponent extends Component {
  @tracked dark = false;

  @action
  changeTheme() {
    this.dark = !this.dark;
    document.body.classList.toggle('dark-mode');
  }
}

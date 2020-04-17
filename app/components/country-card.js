import Component from '@glimmer/component';

export default class CountryCardComponent extends Component {
  get population() {
    // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
    return this.args.country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

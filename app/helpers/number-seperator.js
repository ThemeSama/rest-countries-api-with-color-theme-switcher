import { helper } from '@ember/component/helper';

export default helper(function numberSeperator(params, args) {
  let { number } = args;

  // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});

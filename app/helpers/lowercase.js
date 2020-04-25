import { helper } from '@ember/component/helper';

export default helper(function lowercase(params) {
  let [url] = params;

  return typeof url === 'string' ? url.toLowerCase() : 'index';
});

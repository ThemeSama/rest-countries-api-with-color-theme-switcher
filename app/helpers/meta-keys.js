import { helper } from '@ember/component/helper';

export default helper(function metaKeys(params, args) {
  const { meta, prop } = args;
  let list = [];

  for (const key in meta) {
    if( prop ) {
      list.push(meta[key][prop]);
    } else {
      list.push(meta[key]);
    }
  }

  return list.join(', ');
});

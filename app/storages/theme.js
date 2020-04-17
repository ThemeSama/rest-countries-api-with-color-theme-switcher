import StorageObject from 'ember-local-storage/local/object';

const Storage = StorageObject.extend();

Storage.reopenClass({
  initialState() {
    return {
      // detect visitor's theme mode
      dark: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? true : false
    };
  }
});

export default Storage;
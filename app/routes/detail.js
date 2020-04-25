import Route from '@ember/routing/route';
import fetch from 'fetch';
import env from '../config/environment';
import { isArray } from '@ember/array';

export default class DetailRoute extends Route {
  host = env.host;

  model(params) {
    let { id } = params;
    // fetch country
    return fetch(this.host + "alpha/" + id).then(response => {
      if (response.ok) {
        return response.json();
      }
    });
  }

  setupController(controller, model) {
    super.setupController(controller, model);

    controller.set('country', model);

    // get borders pretty names
    if( isArray(model.borders) && model.borders.length > 0 ) {
      fetch(this.host + "alpha?fields=name;alpha2Code&codes=" + model.borders.join(";")).then(response => {
        if (response.ok) {
          response.json().then(borders => {
            controller.set('country.borders', borders);
          });
        }
      });
    }
  }
}

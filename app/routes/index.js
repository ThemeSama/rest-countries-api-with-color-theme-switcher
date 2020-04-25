import Route from '@ember/routing/route';
import fetch from 'fetch';
import env from '../config/environment';

export default class IndexRoute extends Route {
  host = env.host;

  model() {
    // fetch countries
    return fetch(this.host + "all?fields=name;alpha2Code;flag;population;region;capital").then(response => {
      if (response.ok) {
        return response.json();
      }
    });
  }

  setupController(controller, model) {
    super.setupController(controller, model);

    controller.set('countries', model);
  }
}

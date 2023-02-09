import Route from '@ember/routing/route';
import fetch from 'fetch';
import env from '../config/environment';
import { isArray } from '@ember/array';
import { action } from '@ember/object';
import { isBadRequestResponse } from 'ember-fetch/errors';

export default class DetailRoute extends Route {
  host = env.host;

  model(params) {
    let { id } = params;
    // fetch country
    return fetch(this.host + "alpha/" + id).then(response => {
      if (response.ok) {
        return response.json();
      } else if( isBadRequestResponse(response) ) {
        throw Error(response.status);
      }
    });
  }

  setupController(controller, model) {
    super.setupController(controller, model);

    const [country] = model;

    controller.set('country', country);

    // get borders pretty names
    if( typeof country !== "undefined" && isArray(country.borders) && country.borders.length > 0 ) {
      console.log(country.borders);
      fetch(this.host + "alpha?fields=name,cca3&codes=" + country.borders.join(",")).then(response => {
        if (response.ok) {
          response.json().then(borders => {
            controller.set('country.borders', borders);
          });
        }
      });
    }
  }

  @action
  error(error, transition) {
    if( error ) {
      this.transitionTo('index');
    }
  }
}

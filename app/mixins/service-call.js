import Ember from 'ember';
import raw from 'ic-ajax';

const { RSVP } = Ember;
const BASE_URL = "https://api.github.com/";

export default Ember.Mixin.create({
  getCall( endpoint ) {
    return new RSVP.Promise( function( resolve, reject ) {
      let url = BASE_URL + endpoint;
      raw({ url: url, crossDomain: true, type: 'GET' }).then( function( response ) {
        resolve( response );
      }, reject);
    });
  },
  postCall( endpoint, data ) {
    return new RSVP.Promise( function( resolve, reject ) {
      let url = BASE_URL + endpoint;
      raw({ url: url, crossDomain: true, type: 'POST', data: data }).then( function( response ) {
        resolve( response );
      }, reject);
    });
  }
});

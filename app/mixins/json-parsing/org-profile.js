import Ember from 'ember';
import ServiceCall from 'getmyparking/mixins/service-call';

const { RSVP } = Ember;

export default Ember.Mixin.create(ServiceCall, {

  makingOrgProfileApiCall( endpoint ) {
    return new RSVP.Promise(( resolve, reject ) => {
      this.getCall( endpoint ).then( ( result ) => {
        resolve( result );
      }, reject );
    });
  },
});

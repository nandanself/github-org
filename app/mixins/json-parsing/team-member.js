import Ember from 'ember';
import ServiceCall from 'getmyparking/mixins/service-call';

const { RSVP } = Ember;

export default Ember.Mixin.create(ServiceCall, {

  makingTeamMemberApiCall( endpoint ) {
    return new RSVP.Promise(( resolve, reject ) => {
      this.getCall( endpoint ).then( ( result ) => {
        // let results =.parsingCampaignFeedResult( result.results );
        let object = result;
        resolve( object );
      }, reject );
    });
  },
});

import Ember from 'ember';
import OrgProfile from "getmyparking/mixins/json-parsing/org-profile";
import ResetScroll from "getmyparking/mixins/reset-scroll";

export default Ember.Route.extend(OrgProfile, ResetScroll,{
  model( ) {
    return Ember.RSVP.hash({orgProfile: this.makingOrgProfileApiCall( 'orgs/angular' )});
  }
});

import Ember from 'ember';
import OrgRepositories from "getmyparking/mixins/json-parsing/org-repositories";
import ResetScroll from "getmyparking/mixins/reset-scroll";

export default Ember.Route.extend(OrgRepositories,ResetScroll, {

  model( ) {
    return Ember.RSVP.hash({
    	orgRepos: this.makingOrgRepositoriesApiCall( 'orgs/angular/repos' )
    });
  }

});

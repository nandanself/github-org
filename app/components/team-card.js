import Ember from 'ember';
import TeamMember from "getmyparking/mixins/json-parsing/team-member";

export default Ember.Component.extend(TeamMember,{

	teamMembers:null,
	isLoading:true,

	didInsertElement(){
		this.makingTeamMemberApiCall('orgs/angular/public_members').then((response)=>{
			this.set('teamMembers',response);
			this.set('isLoading',false);
		});
	}

});

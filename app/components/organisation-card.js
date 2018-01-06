import Ember from 'ember';

export default Ember.Component.extend({


	orgDetails:Ember.computed('profile',function(){
		let profile = this.get('profile');

		let data = {
			"id": profile.id,
			"name": profile.name,
		  	"company": profile.company,
		  	"blog": profile.blog,
		  	"location":profile.location,
		  	"email":profile.email,
		  	"created_at":profile.created_at,
		  	"updated_at":profile.updated_at,
		  	"type":profile.type,
		};

		return data;

	}),
});

import Ember from 'ember';

export default Ember.Mixin.create({
	activate: function() {
		window.scrollTo(0,0);
	}
});
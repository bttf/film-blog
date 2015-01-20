import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(c, m) {
    c.transitionToRoute('recent');
  }
});

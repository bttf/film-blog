import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('entry', {
      title: 'Title goes here'
    });
  }
});

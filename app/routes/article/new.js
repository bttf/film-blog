import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('article', {
      title: 'Title goes here'
    });
  },
  afterModel: function(model) {
    model.set('categoryList', this.store.find('category'));
  }
});

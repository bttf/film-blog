import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('entry', params.slug);
  },
  serialize: function(model) {
    return { slug: model.get('slug') };
  }
});
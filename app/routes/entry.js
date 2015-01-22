import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('entry', params.id);
  },
  serialize: function(model) {
    return { slug: model.get('slug'), id: model.get('id') };
  }
});

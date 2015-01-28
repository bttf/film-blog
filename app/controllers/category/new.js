import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    saveCategory: function(category) {
      var controller = this;
      category.set('id', category.get('slug'));
      category.save().then(function(category) {
        controller.transitionToRoute('category', category.get('id'));
      }, function(err) {
        controller.set('error', err);
      });
    }
  }
});

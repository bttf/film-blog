import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    editCategory: function(category) {
      this.transitionToRoute('category.edit', category);
    },
    deleteCategory: function(category) {
      var controller = this;
      category.destroyRecord().then(function() {
        controller.transitionToRoute('recent');
      }, function(err) {
        controller.set('error', err);
      });
    }
  }
});

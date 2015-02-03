import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    deleteArticle: function(article) {
      var controller = this;
      article.destroyRecord().then(function() {
        controller.transitionToRoute('recent');
      }, function(err) {
        controller.set('error', err);
      });
    }
  }
});

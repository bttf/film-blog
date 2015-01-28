import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    saveArticle: function(article) {
      var controller = this;
      article.set('title', Ember.$('.create .title').text().trim());
      article.set('id', article.get('slug'));
      article.save().then(function() {
        controller.set('error', '');
        controller.set('success', 'Saved: ' + (new Date()));
      }, function(err) {
        controller.set('success', '');
        controller.set('error', err);
      });
    }
  }
});

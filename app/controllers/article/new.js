import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    saveArticle: function(article) {
      article.set('title', Ember.$('.create .title').text().trim());
      article.set('id', article.get('slug'));
      article.save().then(function() {
        article.set('error', '');
        article.set('success', 'Saved: ' + (new Date()));
      });

      //
      // emberfire causing issues here
      //
      // this.store.find('article', slug).then(function(otherArticle) {
      //   article.set('error', 'Title already taken; please select another');
      //   console.log('debug');
      //   return;
      // }, function(err) {
      //   article.save().then(function() {
      //     article.set('error', '');
      //     article.set('success', 'Saved: ' + (new Date()));
      //   }, function(err) {
      //     console.dir(err);
      //     article.set('error', 'Error saving article.');
      //   });
      // });
    }
  }
});

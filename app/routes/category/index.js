import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('category', params.slug);
  }
  // afterModel: function(model) {
  //   this.store.find('article').then(function(articles) {
  //     model.set('', articles.filter(function(article) {
  //       if (article.get('categories').contains(model)) {
  //         return true;
  //       }
  //       return false;
  //     }));
  //   });
  // }
});

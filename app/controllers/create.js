import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    saveEntry: function(entry) {
      var isFilm = entry.get('isFilm'),
          isEssay = entry.get('isEssay');
      if (!isFilm && !isEssay) {
        console.log('category error');
        entry.set('error', 'Essay or Film Critique Category must be selected');
        return;
      }
      entry.save().then(function(entry) {
        entry.set('error', '');
        entry.set('success', 'Saved: ' + entry.get('created'));
      }, function(err) {
        console.dir(err);
        entry.set('error', 'Error saving Entry');
      });
    }
  }
});

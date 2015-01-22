import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('entry', {
      title: 'Five Easy Pieces',
      body: 'A masterpiece. Never has a story been told in such a realistic and filthy manner. ;) I puckered up when the main character told mean things to the waitress. I thought he was in for it.'
    });
  }
});

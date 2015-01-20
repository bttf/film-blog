import DS from 'ember-data';
import ENV from 'film-blog/config/environment';

export default DS.FirebaseAdapter.extend({
  firebase: new Firebase('http://' + ENV.APP.firebaseInstance + '.firebaseio.com')
});

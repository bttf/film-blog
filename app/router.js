import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("recent", { path: '/' });
  this.route("create");
  this.route("error");
  this.resource('entry', { path: '/:slug' }, function() {
    this.route('edit');
  });
});

export default Router;

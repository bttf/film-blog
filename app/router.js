import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("recent", { path: '/' });
  this.route("error");
  this.resource("article", function() {
    this.route("new");
    this.route("index", { path: "/:slug" });
  });
  this.route("category", function() {
    this.route("new");
    this.route("index", { path: "/:slug" });
  });
});

export default Router;

import DS from 'ember-data';

var attr = DS.attr,
    hasMany = DS.hasMany;

export default DS.Model.extend({
  name: attr('string'),
  articles: hasMany('article'),
  slug: function() {
    if (this.get('name')) {
      return this.get('name').trim().replace(/\W/g, '-').replace(/-+$/g, '').toLowerCase();
    }
  }.property('name')
});

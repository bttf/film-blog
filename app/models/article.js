import DS from 'ember-data';

var attr = DS.attr,
    belongsTo = DS.belongsTo;

export default DS.Model.extend({
  title: attr('string'),
  body: attr('string'),
  created: attr('date', {
    defaultValue: function() { return new Date(); }
  }),
  category: belongsTo('category'),

  slug: function() {
    if (this.get('title')) {
      return this.get('title').trim().replace(/\W/g, '-').replace(/-+$/g, '').toLowerCase();
    }
  }.property('title')
});

import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  title: attr('string'),
  body: attr('string'),
  created: attr('date', {
    defaultValue: function() { return new Date(); }
  }),
  isFilm: attr('boolean', { defaultValue: false }),
  isEssay: attr('boolean', { defaultValue: false }),
  slug: function() {
    return this.get('title').replace(/\s+/g, '-').toLowerCase();
  }.property('title')
});

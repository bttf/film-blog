import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  title: attr('string'),
  body: attr('string'),
  tags: attr(),
  created: attr('date'),
  slug: attr('string'),
  isFilm: attr('boolean'),
  isEssay: attr('boolean')
});

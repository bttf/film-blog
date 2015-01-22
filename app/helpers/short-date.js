import Ember from 'ember';

export function shortDate(input) {
  if (Ember.isEmpty(input)) {
    return input;
  }
  var date = window.moment(input).format('MM/DD/YYYY');
  return date;
}

export default Ember.Handlebars.makeBoundHelper(shortDate);

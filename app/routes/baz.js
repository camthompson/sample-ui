import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  model() {
    throw 'This route is broken :(';
  }
});

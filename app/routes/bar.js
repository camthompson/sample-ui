import Ember from 'ember';

const {
  Route,
  RSVP: { resolve }
} = Ember;

export default Route.extend({
  actions: {
    baz() {
      return resolve();
    },

    quux() {
      return resolve();
    }
  }
});

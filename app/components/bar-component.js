import Ember from 'ember';

const {
  Component
} = Ember;

export default Component.extend({
  actions: {
    save() {
      this.attrs.baz().then(function() {
        this.set('isSaved', true);
      });
    },

    cancel() {
      this.attrs.quux();
    }
  }
});

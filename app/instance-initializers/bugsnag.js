import Ember from 'ember';
import config from '../config/environment';

export function initialize(instance) {
  let notifyBugsnag = function() {};

  if (['staging', 'production'].indexOf(config.environment) > -1) {
    if (typeof Bugsnag === 'undefined') { return; }

    Bugsnag.apiKey = config.bugsnagKey;
    Bugsnag.releaseStage = config.environment;
    Bugsnag.appVersion = config.currentRevision;

    notifyBugsnag = function(error) {
      Bugsnag.notifyException(error);
    };

    let router = instance.lookup('router:main');
    const originalDidTransition = router.didTransition || Ember.K;
    router.didTransition = function() {
      Bugsnag.refresh();
      return originalDidTransition.apply(this, arguments);
    };
  }

  Ember.onerror = function(error) {
    notifyBugsnag(error);
    sendErrorToConsole(error);
  };
}

export default {
  name: 'bugsnag',
  initialize: initialize
};

function sendErrorToConsole(error) {
  let stack = error && error.stack;
  window.console.error(stack || error);
}

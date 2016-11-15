import config from '../config/environment';

export function initialize() {
  if (typeof Bugsnag === 'undefined') {
    return;
  }
  Bugsnag.appVersion = config.currentRevision;
}

export default {
  name: 'bugsnag',
  initialize
};

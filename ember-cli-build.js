/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var env = EmberApp.env();
var isProductionLikeBuild = ['production', 'staging'].indexOf(env) > -1;
var prependURL;
if (env === 'production') {
  prependURL = '//d14f0vilopav7r.cloudfront.net/'
} else if (env === 'staging') {
  prependURL = '//d9bro5nx6xntq.cloudfront.net/'
}

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    fingerprint: {
      prepend: prependURL,
      enabled: isProductionLikeBuild
    },

    minifyAssets: { enabled: isProductionLikeBuild  },

    minifyJS: { enabled: isProductionLikeBuild  },

    dotEnv: {
      clientAllowedKeys: [
        'BUGSNAG_API_KEY',
        'BUGSNAG_NOTIFY_RELEASE'
      ]
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};

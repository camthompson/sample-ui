/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {
      allowOverwrite: true
    },

    'revision-data': {
      type: 'git-commit'
    },

    build: {
      environment: deployTarget
    }
    // include other plugin configuration that applies to all deploy targets here
  };

  ENV.s3 = {
    region: 'us-east-1',
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET,
    bucket: process.env.AWS_ASSET_BUCKET
  }

  ENV['s3-index'] = {
    region: 'us-east-1',
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET,
    bucket: process.env.AWS_INDEX_BUCKET
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};

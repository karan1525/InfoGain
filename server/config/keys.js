// keys.JS - figure out what set of credentials to return

if (process.env.NODE_ENV === 'production') {
  // We are in production, return prod keys
  module.exports = require('./prod');
} else {
  //we are in development, return the dev keys!

  module.exports = require('./dev');
}

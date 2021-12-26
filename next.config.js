const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['@cypress/mount-utils']) // pass the modules you would like to see transpiled

//module.exports = withTM({})
module.exports = withPlugins([withTM], {
  // ...
})

const withTypescript = require('@zeit/next-typescript')
//
const routes = require('./router/routes');

const withDefaults = (route) => ({
  prerender: true,
  ...route
})

const staticPathMap = routes.reduce((pathMap, route) => {
  const routeWithDefaults = withDefaults(route)
  if (routeWithDefaults.prerender) {
    pathMap[routeWithDefaults.pattern] = { page: routeWithDefaults.page }
  }
  return pathMap
}, {})

module.exports = withTypescript({
  distDir: '../../dist/functions/next',
  dir: './',
  exportPathMap: (defaultPathMap) => staticPathMap
})

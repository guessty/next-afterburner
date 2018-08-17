const withTypescript = require('@zeit/next-typescript');
//
const routes = require('./router/routes');

const staticPathMap = routes.reduce((pathMap, route) => {
  if (route.prerender) {
    pathMap[route.pattern] = { page: route.page }
  }
  return pathMap;
}, {});

module.exports = withTypescript({
  distDir: "../../dist/functions/next",
  dir: './',
  exportPathMap: (defaultPathMap) => staticPathMap,
});

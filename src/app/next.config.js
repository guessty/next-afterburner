const withTypescript = require('@zeit/next-typescript');
const staticRoutes = require('./config/routes').staticRoutes;
//

const staticPathMap = staticRoutes.reduce((pathMap, route) => {
  pathMap[route.pattern] = { page: route.page }
  return pathMap;
}, {});

module.exports = withTypescript({
  distDir: "../../dist/functions/next",
  dir: './',
  exportPathMap: (defaultPathMap) => staticPathMap,
});

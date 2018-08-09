const withTypescript = require('@zeit/next-typescript');
const staticRoutes = require('./routes/static');

const pathMap = {}
staticRoutes.forEach((route) => {
  pathMap[route.pattern] = { page: route.page }
});

module.exports = withTypescript({
  distDir: "../../dist/functions/next",
  dir: './',
  exportPathMap: (defaultPathMap) => pathMap,
});

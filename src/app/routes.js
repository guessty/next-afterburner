const nextRoutes = require('next-routes');
const routeConfig = require('./config/routes');
//
const routes = module.exports = nextRoutes();

[...routeConfig.staticRoutes, ...routeConfig.functionRoutes].forEach((route) => {
  routes.add(route.name, route.pattern, route.page);
});

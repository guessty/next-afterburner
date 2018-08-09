const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

const dynamicRoutes = require('./dynamic');

dynamicRoutes.forEach((route) => {
  routes.add(route.name, route.pattern, route.page);
});

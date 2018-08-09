const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

const dynamicRoutes = require('./dynamic');
const staticRoutes = require('./static');

const allRoutes = [...staticRoutes, ...dynamicRoutes ];

allRoutes.forEach((route) => {
  routes.add(route.name, route.pattern, route.page);
});

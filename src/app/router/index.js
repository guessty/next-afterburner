const nextRoutes = require('next-routes');
const routes = require('./routes');
//
const router = nextRoutes();

routes.forEach((route) => {
  router.add(route.name, route.pattern, route.page);
});

module.exports = router;

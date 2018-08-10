const ssrRoutes = require('./../../functions/src/config/routes').default;

const clientRoutes = [
  { name: 'home', pattern: '/', page: '/', prerender: true },
  { name: 'a', pattern: '/a', page:'/a', prerender: true },
  { name: 'b', pattern: '/b', page:'/b', prerender: true }
];

module.exports = [
  ...clientRoutes,
  ...ssrRoutes
];

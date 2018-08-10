const functionRoutes = require('./../../functions/src/routes').default;

const staticRoutes = [
  { name: 'home', pattern: '/', page: '/'},
  { name: 'a', pattern: '/a', page:'/a' },
  { name: 'b', pattern: '/b', page:'/b' }
];

module.exports = {
  staticRoutes,
  functionRoutes
};

const routes = [
  { name: 'home', pattern: '/', page: '/', prerender: true },
  { name: 'a', pattern: '/a', page:'/a', prerender: false },
  { name: 'b', pattern: '/b', page:'/b', prerender: true },
  { name: 'ba', pattern: '/b/:slug', page: '/a' }
];

module.exports = routes;

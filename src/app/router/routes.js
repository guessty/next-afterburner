const routes = [
  { name: 'home', pattern: '/', page: '/' },
  { name: 'about', pattern: '/about', page:'/about' },
  { name: 'ssr', pattern: '/ssr/:slug', page: '/ssr', prerender: false }
];

module.exports = routes;

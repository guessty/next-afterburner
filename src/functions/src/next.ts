import * as functions from 'firebase-functions';
import * as next from 'next';
const router = require('next-routes')();
//
import routes from './config/routes';

routes.forEach((route) => {
  router.add(route.name, route.pattern, route.page);
});

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, conf: { distDir: 'next' } });
const handler = router.getRequestHandler(app);

export const nextApp = functions.https.onRequest((request, response) => {
  console.log('File: ' + request.originalUrl); // eslint-disable-line no-console
  return app.prepare().then(() => handler(request, response));
});

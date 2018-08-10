import * as functions from 'firebase-functions';
import * as next from 'next';
//
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, conf: { distDir: 'next' } });
const handler = routes.getRequestHandler(app);

export const nextApp = functions.https.onRequest((request, response) => {
  console.log('File: ' + request.originalUrl); // eslint-disable-line no-console
  return app.prepare().then(() => handler(request, response));
});

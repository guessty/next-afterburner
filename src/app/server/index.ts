import { createServer } from 'http';
import * as next from 'next';
//
const router = require('./../router');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = router.getRequestHandler(app)

app.prepare()
.then(() => {
  createServer(handler)
  .listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

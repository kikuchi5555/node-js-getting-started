const express = require('express')
const path = require('path')
// const PORT = process.env.PORT || 8080
const PORT = 8080
const history = require('connect-history-api-fallback');

const app = express();

app.use(history())
  .use(express.static(path.join(__dirname, 'dist')))
  .get('/', (req, res) => res.render('index.html'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

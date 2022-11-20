const express = require('express')
const app = express()
const port = 3000

const PUBLIC_DIR = '../frontend/public'
const MAP_DIR = PUBLIC_DIR + '/map_modules/'

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['http://localhost:5173']);
  next();
});

app.get('/', (req, res) => {
  res.send(list_files(MAP_DIR + 'tiles'))
})

app.get('/tiles', (req, res) => {
  const tiles = list_files(MAP_DIR + 'tiles')
  res.send(tiles)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const list_files = function(dir) {
  const fs = require('fs')
  const results = []
  fs.readdirSync(dir).forEach(function(file) {
      const fn = dir + '/' + file
      results.push(fn.slice(PUBLIC_DIR.length))
  })
  return results
}
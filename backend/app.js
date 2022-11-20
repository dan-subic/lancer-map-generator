const express = require('express')
const path = require('path');
const app = express()
const port = 3000

const PUBLIC_DIR = '../frontend/public'
const MAP_DIR = PUBLIC_DIR + '/map_modules/'

// Append headers
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['http://localhost:5173']);
  next();
});

// Serve static files
app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
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
const express = require('express')
const path = require('path')
const backend = require('./backend')
const app = express()
const port = 3000
const bodyParser = require("body-parser");
// to jest ten middleware
app.use(bodyParser.json());

app.use('/api', backend)

app.use(express.static(path.join(__dirname, 'frontend')))

app.listen(port, onServerStartup)

function onServerStartup() {
  console.log(`Example app listening on port ${port}!`)
}

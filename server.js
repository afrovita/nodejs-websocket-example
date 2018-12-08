var express = require('express')
var ws = require('./ws')
const PORT = process.env.PORT || 5000
var app = express()

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/ws.html');
})

app.listen(PORT, function () {
  console.log('Example app listening on port '+PORT)
})

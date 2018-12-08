'use strict';

var express = require('express');
var SocketServer = require('ws').Server;
const PORT = process.env.PORT || 5000;
var app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/ws.html');
})

app.listen(PORT, function () {
  console.log('Example app listening on port ${ PORT }')
})

const wss = new SocketServer({ app });

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('close', () => console.log('Client disconnected'));
});

setInterval(() => {
  wss.clients.forEach((client) => {
    client.send(new Date().toTimeString());
  });
}, 1000);

#!/usr/bin/env node

'use strict';

var express = require('express');
var http = require('http');
var path = require('path');

const app = express();
const server = new http.Server(app);

const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../public')));

app.listen(port, () => {
  const address = server.address();
  const host = address ? address.address : 'unknown';
  console.log('Server is listening on http://%s:%s', host, port);
});

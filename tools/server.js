'use strict';

const opn = require('opn');
const path = require("path");
const express = require('express');
const app = express();
const projectRoot = path.resolve(path.join(__dirname, '../'));

/** Static Files */
app.use('/', express.static(projectRoot + '/dist'));

/** This route deals enables HTML5Mode by forwarding missing files to the index.html */
app.get('/*', function(req, res) {
  res.sendFile(projectRoot + '/dist/index.html')
});

const port = process.env.PORT || 8000;
const server = app.listen(port, function() {
  console.log('listening on port: %s', port);
  opn('http://localhost:' + port);
});

module.exports = process;

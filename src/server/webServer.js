// Importing express module
const express = require('express');
const data = require('./data.js');

const authConfig = require('./auth-config.js');

// Creating the express.js server
const app = express();

// Enable serving for static pages
// app.use(express.static('../client'));

// Serving the auth config
function init(portListenOn, error) {
  app.get('/auth-config', (req, res) => {
    res.json(authConfig);
  });

  app.get('/get-data', (req, res) => {
    res.send(data.data);
  });

  app.get('/get-data/:id', (req, res) => {
    res.send(data.data);
  });

  // this will serve the files present in static/ inside this stage
  app.use(express.static('../client/'));


  // Listen on port
  app.listen(portListenOn);
  if (!error) {
    console.log('Server accessible on port:' + ' ' + portListenOn);
  }
}

// Boakes, R. (2021). portsoc/staged-simple-message-board. GitHub. Retrieved 8 April 2021, from https://github.com/portsoc/staged-simple-message-board.

module.exports = {
  init,
  App: app,
};
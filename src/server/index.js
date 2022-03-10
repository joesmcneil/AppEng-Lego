// Importing express module
import express from 'express';
import path from 'path';
import url from 'url';

import authConfig from './auth-config.js';


// Creating the express.js server
const app = express();

// Enable serving for static pages
// app.use(express.static('../client'));

// Serving the auth config
app.get('/auth-config', (req, res) => {
  res.json(authConfig);
});

// Variable to store the port value
const portListenOn = 8080;

// this will serve the files present in static/ inside this stage
// app.use(express.static(path.join(path.dirname(url.fileURLToPath(import.meta.url)), '../client')));
app.use(express.static('../client/'));

// Listen on port
function serverStart(portListenOn, error) {
  app.listen(portListenOn);
  if (!error) {
    console.log('Server accessible on port:' + ' ' + portListenOn);
  }
}

// Starting server
serverStart(portListenOn);

// Boakes, R. (2021). portsoc/staged-simple-message-board. GitHub. Retrieved 8 April 2021, from https://github.com/portsoc/staged-simple-message-board.

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// this logs the requests
app.use((req, res, next) => {
  console.log(req.method, req.url); // eslint-disable-line no-console
  next();
});

app.use(bodyParser.text());

// this sets up routes for the other files
app.use('/static', express.static(path.join(__dirname, '/../')));

app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, '/../bulb.png'));
});

// this sends the index.html for the initial page load
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../index.html'));
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'));

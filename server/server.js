const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('es6-promise').polyfill();
require('isomorphic-fetch');

const app = express();
// this logs the requests
app.use((req, res, next) => {
  // console.log(req.method, req.url);
  next();
});
app.use(bodyParser.text());

// this sets up routes for the other files
app.use('/static', express.static(path.join(__dirname, '/../')));
app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, '/../bulb.png'));
});

// to do login through reddit since redirect won't work on browser
app.get('/login', (req, res) => {
  fetch('https://www.reddit.com/api/v1/authorize?client_id=aO_hakV12sMyFA&response_type=code&state=signedin&redirect_uri=http://localhost:3000&scope=identity')
    .then((response) => {
      res.send(response.url);
    });
});

app.post('/access_token', (req, res) => {
  // console.log(req.body);
  const str = 'aO_hakV12sMyFA:07uq5ys9b9DNhc6payeqCWXz15g';
  const str1 = Buffer.from(str).toString('base64');
  const str2 = `Basic ${str1}`;

  const headers = new Headers({ Authorization: str2 });
  const myInit = {
    method: 'POST',
    headers,
    body: `grant_type=authorization_code&code=${req.body}&redirect_uri=http://localhost:3000`,
  };

  const myRequest = new Request('https://www.reddit.com/api/v1/access_token', myInit);
  fetch(myRequest)
    .then(response => response.json())
    .then((json) => {
      // console.log('response from api call', json);
      res.send(json.access_token);
    });
});

// this sends the index.html for the initial page load
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../index.html'));
});

// app.set('host', process.env.HOST || 'localhost');
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'));

// app.listen(app.get('port'), app.get('host'), function(error) {
//   if(error) console.log('error');
//   console.log(`Server listening @ ${app.get('host')}:${app.get('port')}`);
// });

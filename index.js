// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// Log all requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello my API'});
});

app.get("/api/:date", function (req, res) {
  // Solution to timestamp string conversion to unix referenced from:
  // https://bobbyhadz.com/blog/javascript-get-unix-timestamp-from-date-string#:~:text=In%20short%2C%20to%20convert%20a,divide%20the%20result%20by%201000%20.
  const date = new Date(req.params.date);
  console.log(date);
  res.json({unix: date.getTime()});
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

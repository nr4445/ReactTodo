var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

//it's the commo patteren for express middleware, that it do with every request
app.use(function (req, res, next){
  //x-forwarded-proto header wont exist on localhost
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://'+req.hostname+req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});

var express = require('express')
var bodyParser = require('body-parser')
var app = express()


// REMEMBER TO PLUGIN YOUR ROUTERS HERE!
app.use(bodyParser.json());

var routes = require('./routes/index');

app.use('/', routes);

app.listen(process.env.PORT || 3000)
module.exports = app //this line is only used to make testing easier
var express = require('express'),
app = express(),
port = process.env.PORT || 3000;

mongoose = require('mongoose'),
Client = require('./api/models/clientModel'),
bodyParser = require('body-parser');

// CORS
var cors = require('cors');
app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/clientdb', { useNewUrlParser: true, useFindAndModify: false });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./api/routes/clientRoutes');
routes(app);
app.listen(port);
console.log('Client RESTful API server started on: ' + port);
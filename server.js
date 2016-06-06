/* dependencies */
var express			= require('express');
var mongoose		= require('mongoose');
var port			= process.env.PORT || 3000;
var morgan			= require('morgan');
var bodyParser		= require('body-parser');
var methodOverride	= require('method-override');
var app				= express();

/* express config */
mongoose.connect("mongodb://localhost/mean-map");

/* log & parse */
app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

/* routes */
//require('./app/routes.js')(app);

/* listen */
app.listen(port);
console.log('The magic happens on port ' + port);
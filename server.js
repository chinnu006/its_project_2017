var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(__dirname + '/'));
//app.use(express.static(path.join(__dirname, 'src')));

app.listen(PORT, function(err){
	if(err){
		console.log('Error in server!');
	}else{
		console.log('Server running on port: 3000');
	}
});

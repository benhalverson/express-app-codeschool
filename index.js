var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.write("hello");
	res.end();
});

app.get('/blocks', function(req, res){
	var blocks = ["Fixed", "Movable", "Rotating"];
	res.json(blocks);
	res.redirect('/parts');
});
app.listen(3000);
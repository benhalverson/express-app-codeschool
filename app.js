/**
 * Created by ben on 12/4/14.
 */
var express = require("express");
var app = express();

//another way to serve static files
//app.get('/', function(request, response){
//	response.sendFile(__dirname + '/public/index.html');
//});
app.use(express.static('public'));

app.get('/blocks', function(req, res) {
	var blocks = ["Fixed", "Movable", "Rotating"];
	res.json(blocks);

});
app.listen(3000, function(){
	console.log("Listening on port 3000");
});
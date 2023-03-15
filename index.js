var express = require('express');
var app = express();

const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

var data=[];

app.use(express.static('html'));


app.post("/annotation", function(req, res){
	var body = req.body;
	console.log(body);
	data.push(body);
	console.log(data);
	res.send();
});

app.get("/recup_annotations", function(req, res){
		res.send(data);
});
	

app.listen(port, function(){
	console.log('serveur listening on port : '+port);
});
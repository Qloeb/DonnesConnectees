var express = require('express');
var app = express();

const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

var id = 0;
var data={};


app.use(express.static('html'));


app.post("/annotation", function(req, res){
	var body = req.body;
	console.log(body);
	data[id] = body;
	id++;
	console.log(data);
	res.send();
});

app.get("/recup_annotations", function(req, res){
		res.send(data);
});

app.get("/recup_annotations_uri", function(req, res){
	var uri = req.query.uri;

	tab_annot = [];
	for (idx in data){
		if (data[idx]["URI"] == uri){
			tab_annot.push(data[idx]["Commentaire"]);
		}
	}
	res.send(tab_annot);
});

app.get("/recup_annotation_uri_id", function(req, res){
	var uri = req.query.uri;
	var id = req.query.id;

	tab_annot = [];

	for (idx in data){
		if (data[idx]["URI"] == uri && idx == id){

			tab_annot.push(data[id]);

		}
	}
	res.send(tab_annot);

});
	

app.listen(port, function(){
	console.log('serveur listening on port : '+port);
});
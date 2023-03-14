var express = require('express');
var app = express();
var bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

//localhost:3000 pour voir les ressources

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/toto", function(request, response){
    response.send("salut toto");
});


app.listen(port, function(){
	console.log('serveur listening on port : '+port);
});

app.post("/donnees", function(req, res) {
    var donnees = req.body;
    console.log(donnees);
    res.send("Données reçues !");
  });
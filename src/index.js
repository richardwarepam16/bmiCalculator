const express = require('express');

const app = express();

const bodyParse = require('body-parser');

app.use(bodyParse.urlencoded({extended: true}));

app.get("/", function(req,res){
  res.sendFile( __dirname + "/index.html");
});

app.post("/", function(req,res){
  var yourWeight = Number(req.body.weight);
  var yourHeight = Number(req.body.height);

  var yourBmi = yourWeight/Math.pow(yourHeight,2);

  res.send("Your BMI is " + yourBmi);
});

app.listen(3000, function(req,res){
  console.log("You have done it, Richard")
});

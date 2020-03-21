const express = require("express");
 
const app = express();
 
app.get("/hack",function (request, response) {
    response.sendFile(__dirname + "/static/index/index.html");
  });

app.get("/img/image.jpg",function (request, response) {
    response.sendFile(__dirname + "/static/img/image.jpg");
  });

app.get("/",function (request, response) {

    response.setHeader('Content-Type', 'text/html');
    response.sendFile(__dirname + "/static/hack/hack.text");
  });

app.listen(3001);
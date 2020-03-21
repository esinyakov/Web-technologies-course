const express = require("express");
 
const app = express();
 
app.get("/",function (request, response) {
    response.sendFile(__dirname + "/static/index/index.html");
  });

app.get("/img/image.jpg",function (request, response) {
    response.sendFile(__dirname + "/static/img/image.jpg");
  });

app.listen(3000);
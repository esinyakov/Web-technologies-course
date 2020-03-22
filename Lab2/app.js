const express = require("express");
var expressLogging = require('express-logging');
var logger = require('logops');

const app = express();

app.use(expressLogging(logger));

app.get("/",function (request, response) {
  response.send("get");
});

app.get("/index",function (request, response) {
    response.sendFile(__dirname + "/static/index/index.html");
  });

app.get("/img",function (request, response) {
    response.sendFile(__dirname + "/static/img/image.jpg");
  });

app.listen(3000); 
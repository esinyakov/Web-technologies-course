const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const jsonParser = express.json();

let arr = new Array();

app.get("/", function(request, response){
    response.send(arr);
});

app.post("/", jsonParser, function (request, response) {
    console.log(request.body);
    arr.push(request.body);
    response.send("Elemenet added to array");
});

app.delete("/",bodyParser.text(),  function (request, response) {
    console.log(request.body);
    arr.splice(request.body,1);
    response.send("Elemenet deleted from array");
});

app.options("/",function (request, response) {
    response.header('Allow', 'GET,PUT,POST,DELETE,OPTIONS');
    response.send();
});

app.listen(3000);
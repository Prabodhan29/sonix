const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");  
});

app.get("/aboutUs", function(req, res) {
    res.sendFile(__dirname + "/aboutUs.html");
});

app.get("/products", function(req, res) {
    res.sendFile(__dirname + "/products.html");
});

app.get("/clients", function(req, res) {
    res.sendFile(__dirname + "/clients.html");
});

app.get("/contactUs", function(req, res) {
    res.sendFile(__dirname + "/contactUs.html");
});



app.listen("3000", function() {
    console.log("This port is running on port 3000");
});


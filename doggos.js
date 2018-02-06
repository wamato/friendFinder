//create an express server
//create objects that store "scores" of certain fields
//create a way to compare the scores to the input fields of html a user inputs
//create a best match system to then display what the user matches with 
//profit
//also do the assignment and not leave it on your other computer...yeah that part is important.

var bestDoggo = {
    play: 10,
    love: 10,
    tricks: 10,
    smart: 10,
    clean: 10,
};

var goodBoy = {
    play: 9,
    love: 10,
    tricks: 8,
    smart: 8,
    clean: 8,
};

var troubleMaker = {
    play: 7,
    love: 8,
    tricks: 10,
    smart: 10,
    clean: 6,
};

var hyperDoggo = {
    play: 10,
    love: 10,
    tricks: 3,
    smart: 7,
    clean: 7,
};
console.log(bestDoggo.play);

//create the express server 
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = 3000;

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.listen(port);



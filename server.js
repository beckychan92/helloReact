//import module 
var express = require('express');

//Create our app 
var app = express(); 

//tell it which folder it will serve
app.use(express.static('public'));

//start server
app.listen(3000, function (){
    console.log('Express server is up on port 3000');
});
// Start of the Code...
const express = require('express')
const bodyParser= require('body-parser')

const { mongoose }  = require('./db.js') 
var empCont =require("./controllers/empsController")
var app = express(); // creating an express application 
app.use(bodyParser.json()); // setups middleware to  be used for  all routes 


app.listen( 3000 , ()=>console.log('Server Started at port : 3000'));
app.use('/test' , empCont)
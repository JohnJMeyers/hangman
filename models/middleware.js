const express = require('express');
//example of how middleware works (I think...).

//declare your functions, variables, etc...
let randomArray = []

let randomNumber

let newNumber

let makesRandomNumber = function(req, res){
  randomNumber = Math.floor(Math.random() * 1000) + 1;
  return randomNumber
}


// 1. client makes a get request to the server
app.get('/midd', function(req, res){

// 2. middleware goes here
// (everything we want to happen before the server responds)
app.use('/midd', function(req, res, next) {

  console.log(randomNumber)
  newNumber = randomNumber
  next()
})
app.use('/', function(req, res) {
  console.log(newNumber)
  return newNumber
})
  console.log(newNumber + 1);

  res.render('/midd')
})

module.exports = {
  randomArray,
  randomNumber,
  newNumber
}

const express = require('express');
const router = express.Router();



const models = require('../models/models.js');
let whichDifficulty = models.difficulty;
let words = models.words;
let max = models.max;
let getRandomWord = models.getRandomWord;
let randomNumber = models.randomNumber;
let randomWord = models.randomWord;
// let userGuess = models.userGuess
// let letterGuessed = models.letterGuessed
// let randomWordBox = models.randomWordBox
let letterGuessed = []
let randomWordBox = []
let userGuess
let diffInput




router.get('/', function(req, res){

  res.render('welcome');
})

router.post('/', function(req, res){
  diffInput = req.body.difficulty
  whichDifficulty(diffInput);
  res.redirect('/hangman')


})

router.use('/', function(req, res, next) {



  getRandomWord(max)

  randomWordBox.push(randomWord)
  console.log(randomWordBox)
  next()
})
router.get('/hangman', function(req, res){
  console.log(randomWord)
  res.render('hangman', {
    letterGuessed: letterGuessed
  })
})

router.post('/hangman', function(req,res){
  userGuess = req.body.guess
  letterGuessed.push(userGuess + ' ')
  res.redirect('/hangman')

})


module.exports = router;

const express = require('express');
const fs = require('fs');
const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");

const max = 235887;
let randomNumber
let randomWord
// let userGuess
// let letterGuessed = []
let randomWordBox = []
// let userGuess


function difficulty(diffInput) {
  if (diffInput === 'easy') {
    console.log('easy')
  } else if (diffInput === 'medium') {
    console.log('medium')
  } else {
    console.log('hard')
  }
}

function easy(){

}

function medium(){

}

function hard(){

}

// This function generates a random word
// function getRandomWord(max){
//   randomNumber = Math.floor(Math.random() * max) + 1;
//   randomWord = words[randomNumber]
//   console.log(randomWord);
//   return randomWord;
// }

const getRandomWord = function (req, res){
  randomNumber = Math.floor(Math.random() * max) + 1;
  randomWord = words[randomNumber]
  console.log(randomWord);
  return randomWord;

}
// function (req, res, next){
//   res.render('/');
// }

module.exports = {
  difficulty,
  easy,
  medium,
  hard,
  words,
  getRandomWord,
  randomNumber,
  randomWord,
  max,
  // userGuess,
  // letterGuessed,
  randomWordBox
}

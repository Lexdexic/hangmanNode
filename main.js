var Word = require("./word.js");
var inquirer = require("inquirer");


var randomWord = new Word("dog");
console.log(randomWord);
console.log();

randomWord.letters[2].visible = true;

console.log(randomWord.letters.join(" "));
randomWord.letters[0].visible = true;
console.log(randomWord.letters.join(" "));

randomWord.letters[0].getChar()

// checkin for winer
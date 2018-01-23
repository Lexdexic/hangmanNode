var Letter = require("./letter.js")

function Word(randomWord){
	this.letters = randomWord.split("").map(function(char){
		return new Letter(char)
	});
}

// prototype function for toString that will join the letters Array
Word.prototype.toString = function(){
	return this.letters.join(" ");
};
// prototype function to check for correct guess
	// pass guessed char in to ^ as paramater

// prototype function to see if all letters re visable
	// check documentation on every function
Word.prototype.isWordGuessed = function(){
	for (var i = 0; i < this.letters.length; i++) {
		if (this.letters[i].isVisible !== true){
			return false;
		}

	}
	return  true;
};
module.exports = Word;
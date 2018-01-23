function Letter(char){
	this.char = char;
	this.isVisible = false;
}

Letter.prototype.toString = function(){
	if (this.isVisible === true){
		return this.char;
	}; 
	return "*";
};

Letter.prototype getChar = function(){
	return this.char;
};

// prototype function that takes the user guessed char as a paramater and decides if the guess is correct
	// in this function ^ 
	// if guess char === this.char 
		// this.isVisible = true;
		// return true

module.exports = Letter;




class Shiritori {
	
	constructor(words, game_over) {
		this.words = [];
		this.game_over = false;
	}
		
	play(word) {
		if (this.game_over === true) return "game over";
		if (this.words.length === 0) {
			this.words.push(word);
			return this.words;
		} else {
			let lastWord = this.words[this.words.length - 1];
			let validChar = lastWord.split("")[lastWord.length - 1];
			if (word.startsWith(validChar) && !(this.words.includes(word))) {
				this.words.push(word);
				return this.words;
			} else {
				this.game_over = true;
				return "game over";
			}
		}
	}

	restart() {
		this.words = [];
		this.game_over = false;
		return "game restarted";
	}
	
}
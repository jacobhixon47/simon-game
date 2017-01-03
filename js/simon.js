function Simon() {
  this.colors = ['red', 'green', 'blue', 'yellow'];
  this.currentGame = [];
  this.currentPlayer = [];
  this.gameOver = false;
}

Simon.prototype.pattern = function() {
  min = 0;
  max = 3;
  colorIndex = Math.floor(Math.random()*(max-min+1)+min);
  this.currentGame.push(this.colors[colorIndex]);
  this.currentPlayer = [];
};

Simon.prototype.answerCheck = function() {
  for (i = 0; i <= this.currentPlayer.length - 1; i++) {
    if (this.currentPlayer[i] !== this.currentGame[i]) {
      this.gameOver = true;
    } else {
      this.gameOver = false;
    }
  }
};


exports.simonModule = Simon;

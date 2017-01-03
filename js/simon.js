function Simon() {
  this.colors = ['red', 'green', 'blue', 'yellow'];
  this.currentGame = [];
  this.currentPlayer = [];
}

Simon.prototype.play = function() {
  min = 0
  max = 3
  colorIndex = Math.floor(Math.random()*(max-min+1)+min);
  this.currentGame.push(this.colors[colorIndex]);
}

exports.simonModule = Simon;

function Simon() {
  this.colors = ['red', 'green', 'blue', 'yellow'];
  this.currentGame = [];
}

Simon.prototype.play = function() {
  min = 0
  max = 3
  colorIndex = Math.floor(Math.random()*(max-min+1)+min);
  this.currentGame.push(this.colors[colorIndex]);
  for (i = 0; i <=  this.currentGame.length; i++) {
  }
}

exports.simonModule = Simon;

var Simon = require('./../js/simon.js').simonModule;

$(document).ready(function() {
  var simon = new Simon();
  $('#play').click(function(event) {
    event.preventDefault();
    simon.currentGame = [];
    simon.currentPlayer = [];
    simon.gameOver = false;
    simon.pattern()
    simon.currentGame.forEach(function(color, i) {
      setTimeout(function() {
        $('#' + color).addClass('lighten-3');
      }, 800 * i);
      setTimeout(function() {
        $('#' + color).removeClass('lighten-3');
      }, (800 * (i + 1))-200);
    });

  });
  $('.game-button').click(function(event) {
    event.preventDefault();
    simon.currentPlayer.push($(this).attr('id'));
    simon.answerCheck();
    if (simon.currentPlayer === simon.currentGame && simon.gameOver === false) {
      simon.pattern();
    }
    else {
      alert('you lose');
    }
  });
});

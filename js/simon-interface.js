var Simon = require('./../js/simon.js').simonModule;

$(document).ready(function() {
  var simon = new Simon();
  $('#play').click(function(event) {
    event.preventDefault();
    $(this).removeClass('loser-button')
    simon.currentGame = [];
    simon.currentPlayer = [];
    simon.gameOver = false;
    simon.pattern();
    simon.currentGame.forEach(function(color, i) {
      setTimeout(function() {
        $('#' + color).removeClass('darken-3');
        $('#' + color).addClass('lighten-3');
      }, 600 * i);
      setTimeout(function() {
        $('#' + color).removeClass('lighten-3');
        $('#' + color).addClass('darken-3');
      }, (600 * (i + 1))-200);
    });

  });
  $('.game-button').click(function(event) {
    event.preventDefault();
    simon.currentPlayer.push($(this).attr('id'));
    simon.answerCheck();
    if (simon.gameOver === true) {
      alert("its over fool");
      $('#play').addClass('loser-button');
    } else if (simon.gameOver === false) {
      if (simon.currentPlayer.length === simon.currentGame.length) {
        simon.pattern();
        setTimeout(function() {
          simon.currentGame.forEach(function(color, i) {
            setTimeout(function() {
              $('#' + color).removeClass('darken-3');
              $('#' + color).addClass('lighten-3');
            }, 600 * i);
            setTimeout(function() {
              $('#' + color).removeClass('lighten-3');
              $('#' + color).addClass('darken-3');
            }, (600 * (i + 1))-200);
          });
        }, 800);
      }
    }
  });
});

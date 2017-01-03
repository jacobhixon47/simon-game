var Simon = require('./../js/simon.js').simonModule;

$(document).ready(function() {
  var simon = new Simon();
  $('#play').click(function(event) {
    event.preventDefault();
    $('#pattern-result').empty()
    simon.play()
    simon.currentGame.forEach(function(color, i) {
      setTimeout(function() {
        $('#' + color + '-button').addClass('lighten-3');
      }, 800 * i);
      setTimeout(function() {
        $('#' + color + '-button').removeClass('lighten-3');
      }, (800 * (i + 1))-200);
    });
  });
});

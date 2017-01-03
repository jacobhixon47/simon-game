(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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
    $(this).toggleClass('darken-3');
    $(this).delay(500).toggleClass('darken-3');
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

},{"./../js/simon.js":1}]},{},[2]);

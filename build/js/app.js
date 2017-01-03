(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{"./../js/simon.js":1}]},{},[2]);

var prompt = require('sync-prompt').prompt;
var Board = require('./board.js');
var Player = require('./player.js');
var board = new Board();
var player = new Player();

player.setNickname(prompt('enter name: '));
console.log(player.getNickname());
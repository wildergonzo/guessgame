var prompt = require('sync-prompt').prompt;
var console = require('better-console');
var Board = require('./board.js');
var Player = require('./player.js');
var board = new Board();
var player = new Player();
var g1x = 0, g1y = 0, g2x = 0, g2y = 0;
var guess1 = '', guess2 = '';
var gameover = false;

console.info('guessgame');
console.log('---------');
player.setNickname(prompt('enter name: '));
console.warn('welcome ' + player.getNickname());
board.createBoard(parseInt(prompt('enter level(1-10): ')));
console.table(board.getMatrix());
console.table(board.getClonedMatrix());

do {
    console.log('guess1:');
    g1x = parseInt(prompt('row index: '));
    g1y = parseInt(prompt('column index: '));
    console.warn('the value for matrix[' + g1x + '][' + g1y + '] is: ' + board.getValue(g1x, g1y));
    guess1 = board.getValue(g1x, g1y);
    console.log('guess2:');
    g2x = parseInt(prompt('row index: '));
    g2y = parseInt(prompt('column index: '));
    console.warn('the value for matrix[' + g2x + '][' + g2y + '] is: ' + board.getValue(g2x, g2y));
    guess2 = board.getValue(g2x, g2y);
    if (guess1.localeCompare(guess2) === 0) {
        //console.clear();        
        board.setClonedMatrix(g1x, g1y, g2x, g2y, guess1);
        console.table(board.getMatrix());
        console.table(board.getClonedMatrix());
        console.info('good play!, you found the match for: ' + guess1);
        if (board.clonedMatrixIsFull()){
            gameover = true;
        }
    } else {
        console.error('sorry.. no match for the combination, please try again..');        
    }
} while(!gameover)
console.log('------------------------------------------------------------');
console.warn('congratulations!, you discovered the entire table!, you won!');
console.log('------------------------------------------------------------');
var Board = require('./../app/board.js');
describe('Board Tests', function (){
    var board;
    beforeEach(function(){
        board = new Board();
    });
    it('should create a matrix (board) based on a size entry', function (){
        board.createBoard(6);
        expect(board.getMatrix().length).toBe(3);
        expect(board.getMatrix()[0].length).toBe(4);
    });
    
    it('should populate the board with letters', function (){
        var invalidValue = false;
        board.createBoard(3);
        for (var i = 0; i<2; i++) {
            for (var j = 0; j<3; j++) {            
                if (board.getMatrix()[i][j] !== 'a' && 
                    board.getMatrix()[i][j] !== 'b' && 
                    board.getMatrix()[i][j] !== 'c') {
                    invalidValue = true;
                }
            }
        }
        expect(invalidValue).toBeFalsy();
    });
    
    it('should return a matrix object', function (){
        board.createBoard(3);
        expect(typeof board.getMatrix()).toEqual('object');
    });
    
    it('should return a value from the board', function (){
        var values = ['a', 'b', 'c'];
        board.createBoard(3);
        expect(values).toContain(board.getValue(0,1));
    });
    
    it('should set a value to the clonedMatrix given a position', function (){
        board.createBoard(3);
        board.setClonedMatrix(0, 0, 1, 1, 'w');
        expect(board.getClonedMatrix()[0][0]).toBe('w');
        expect(board.getClonedMatrix()[1][1]).toBe('w');
    });
    
    it('should verify whether the clonedMatrix was totally discovered', function (){
        board.createBoard(3);
        board.setClonedMatrix(0, 0, 0, 1, 'a');
        board.setClonedMatrix(0, 2, 1, 0, 'b');
        board.setClonedMatrix(1, 1, 1, 2, 'c');
        expect(board.clonedMatrixIsFull()).toBeTruthy();
    });
    
});
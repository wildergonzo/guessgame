//boardSpec.js
var Board = require('../app/board.js');

describe('Board', function(){
	
	var board;
	
	beforeEach(function(){
		board = new Board();
	});
	
	afterEach(function(){
		board = null;
	});
	describe('clonedMatrixIsFull', function(){
		it('should fill the cloned matrix', function(){
		
			var actualResult = board.clonedMatrixIsFull();
			var expectedResult = true;
			expect(actualResult).toBe(expectedResult);
		});
	});
	describe('createBoard', function(){
		it('should create the board correctly', function(){
			var actualResult = board.createBoard(6);
			var expectedResult = 3;
			expect(actualResult).toBe(expectedResult);
		});
	});
});

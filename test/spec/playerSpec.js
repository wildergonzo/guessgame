//playerSpec.js
var Player = require('../app/player.js');

describe('Player', function(){
	
	var player;
	
	beforeEach(function(){
		player = new Player();
	});
	
	afterEach(function(){
		player = null;
	});
	describe('setNickname', function(){
		it('should set the nick name correctly', function(){
		
			var actualResult = player.setNickname('albert');
			var expectedResult = 'albert';
			expect(actualResult).toBe(expectedResult);
		});
		it('should raise an exception when call the setNickname function without parameters', function(){
			
			expect(function(){
				player.setNickname();
			}).toThrow('Error. unable call the function without parameters');
		});
	});
	describe('getNickname', function(){
		it('should get the nick name correctly', function(){
			var actualResult = player.getNickname();
			var expectedResult = 'wilder';
			expect(actualResult).toBe(expectedResult);
		});
	});
});

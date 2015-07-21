var Player = require('./../app/player.js');
describe('Player Tests', function (){
    var player;
    beforeEach(function(){
        player = new Player('wilder');
    });
    it('should set the player nickname', function (){
        player.setNickname('albert');
        var expectedResult = 'albert';
        expect(player.getNickname()).toBe(expectedResult);
    });
    
    it('should get the player nickname', function (){        
        var expectedResult = 'wilder';
        expect(player.getNickname()).toBe(expectedResult);
    });
    
});
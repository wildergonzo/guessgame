var Player = function () {};
    var nickname = 'wilder';
    Player.prototype.setNickname = function (nname) {
        nickname = nname;
		//just for testing purposes
		return nickname;
    };
    Player.prototype.getNickname = function () {
        return nickname;
    };
	
module.exports = Player;
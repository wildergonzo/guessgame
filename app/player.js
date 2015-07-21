var Player = function () {
    var nickname = '';
    this.setNickname = function (nname) {
        nickname = nname;
    };
    this.getNickname = function () {
        return nickname;
    };
};
module.exports = Player;
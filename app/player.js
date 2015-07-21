var Player = function (nname) {
    var nickname = nname;
    this.setNickname = function (nname) {
        nickname = nname;
    };
    this.getNickname = function () {
        return nickname;
    };
};
module.exports = Player;
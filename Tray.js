import 'Player';

function Tray(player1, player2, size) {
    this.size = size;
    this.player1 = player1;
}

Tray.prototype.getPlayer1 = function() {
    return this.PLayer1;
}

Tray.prototype.setSize = function(size) {
    this.size = size;
}


try {
    module.exports = Player;
} catch {
    // Utile pour importer les classes à testé et ne pas crash en navigateur
}
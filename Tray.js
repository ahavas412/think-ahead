function Tray(player1, player2, size) {
    this.size = size;
    this.player1 = player1;
    this.player2 = player2;
}

Tray.prototype.getPlayer1 = function() {
    return this.player1;
}

Tray.prototype.getPlayer2 = function() {
    return this.player2;
}

Tray.prototype.getSize = function() {
    return this.size;
}

Tray.prototype.setSize = function(size) {
    this.size = size;
}


try {
    module.exports = Tray;
} catch {
    // Utile pour importer les classes à testé et ne pas crash en navigateur
}
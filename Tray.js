import 'Player';
import 'Cell';

function Tray(player1, player2, size, tabCell) {
    this.size = size;
    this.player1 = player1;
    this.player2 = player2;
    this.tabCell = tabCell;
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

Tray.prototype.getTabCell = function() {
    return this.tabCell;
}
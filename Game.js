import 'Player';
import 'Chrono';
import 'Tray';

function Game(countTurn, currentPlayer, mode, chrono) {
    this.countTurn = countTurn;
    this.currentPlayer = currentPlayer;
    this.mode = mode;
    this.chrono = chrono;
}

Game.prototype.getCountTurn = function() {
    return this.countTurn;
}

Game.prototype.setCountTurn = function(countTurn) {
    this.countTurn = countTurn;
}

Game.prototype.getCurrentPlayer = function() {
    return this.currentPlayer;
}

Game.prototype.setCurrentPlayer = function(currentPlayer) {
    this.currentPlayer = currentPlayer;
}

Game.prototype.getMode = function() {
    return this.Mode;
}

Game.prototype.setMode = function(mode) {
    this.mode = mode;
}

Game.prototype.getChrono = function() {
    return this.chrono;
}
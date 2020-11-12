function Game(countTurn, currentPlayer, mode, chrono) {
    this.countTurn = countTurn;
    this.currentPlayer = currentPlayer;
    this.mode = mode;
    this.chrono = chrono;
}

const VERTICAL = 'vertical';
const HORIZONTAL = 'horizontal'

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
    return this.mode;
}

Game.prototype.setMode = function(mode) {
    if (this.availableModes().indexOf(mode)) {
        this.mode = mode;
    } else {
        throw new Error('Invalid Mode')
    }
}

Game.prototype.getChrono = function() {
    return this.chrono;
}

Game.prototype.availableModes = function() {
    return [
      VERTICAL,
      HORIZONTAL,
    ];
}

Game.prototype.changeScore = function(value) {
    this.getCurrentPlayer().setScore(this.getCurrentPlayer().getScore() + value);
}

Game.prototype.changePlayer = function(mainPlayer) {
    this.setCurrentPlayer(mainPlayer);
}

Game.prototype.changeTour = function(mainPlayer) {
    if (mainPlayer != this.getCurrentPlayer()) {
        if (this.getMode() == "verticale") {
            this.setMode("horizontale");
        } else {
            this.setMode("verticale");
        }
        this.changePlayer(mainPlayer);
        this.setCountTurn(this.getCountTurn() + 1);
    }
}

try {
    module.exports = Game;
} catch {
    // Utile pour importer les classes à testé et ne pas crash en navigateur
}
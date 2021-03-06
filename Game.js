function Game(currentPlayer, mode, chrono, player1, player2) {
    this.countTurn = 1;
    this.currentPlayer = currentPlayer;
    this.mode = mode;
    this.chrono = chrono;
    this.player1 = player1;
    this.player2 = player2;
}

Game.prototype.VERTICAL = function() {
    return 'vertical';
}
Game.prototype.HORIZONTAL = function() {
    return 'horizontal';
}

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
    this.mode = mode;

}

Game.prototype.getChrono = function() {
    return this.chrono;
}

Game.prototype.getPlayer1 = function() {
    return this.player1;
}

Game.prototype.getPlayer2 = function() {
    return this.player2;
}

Game.prototype.availableModes = function() {
    return [
        this.VERTICAL(),
        this.HORIZONTAL(),
    ];
}

Game.prototype.changeScore = function(value) {
    this.getCurrentPlayer().setScore(this.getCurrentPlayer().getScore() + value);
}

Game.prototype.changePlayer = function(mainPlayer) {
    this.setCurrentPlayer(mainPlayer);
}

Game.prototype.victoire = function(tray) {
    tray.getTrayAfterFactory();
}

Game.prototype.updateCell = function(tabCell, numCell) {
    tabCell.forEach(cell => {
        if (cell.getNum() == numCell) {
            cell.setIsEnabled(false);
        }
    });
}

Game.prototype.changeTour = function() {
    var mainPlayer = (this.getCurrentPlayer() === this.getPlayer1()) ? this.getPlayer2() : this.getPlayer1();
    if (this.getMode() === this.VERTICAL()) {
        this.setMode(this.HORIZONTAL());
    } else {
        this.setMode(this.VERTICAL());
    }
    this.changePlayer(mainPlayer);
    this.setCountTurn(this.getCountTurn() + 1);
    this.getChrono().setPlayerChrono(mainPlayer);
}

/**
 * Vérifier si le move est bon en fonction de numCell et le mode
 *
 * @param tabCell Tableau d'objet Cell
 * @param numCell ID de la Cell qui vient d'etre cliqué
 *
 * @return boolean
 */
Game.prototype.checkValidMove = function(tabCell, numCell) {
<<<<<<< HEAD
    tabcell.forEach(cell => {
=======
    tabCell.forEach(cell => {
>>>>>>> e24558abb1d196b480e5994cec29f70f58cabedc
        if (cell.getNum() == numCell) {
            var currentCell = cell;
        }
    });

    if (game.getMode() == Game.VERTICAL) {

    } else {

    }
}

try {
    module.exports = Game;
} catch {
    // Utile pour importer les classes à testé et ne pas crash en navigateur
}
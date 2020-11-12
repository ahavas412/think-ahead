function Player(nom) {
    this.nom = nom;
    this.score = 0;
}

Player.prototype.getNom = function() {
    return this.nom;
}

Player.prototype.getScore = function() {
    return this.score;
}

Player.prototype.setScore = function (score) {
    this.score = score;
}

try {
    module.exports = Player;
} catch {
    // Utile pour importer les classes à testé et ne pas crash en navigateur
}
function Player(nom, score) {
    this.nom = nom;
    this.score = score;
}

Player.prototype.getNom = function() {
    return this.nom;
}

Player.prototype.getScore = function() {
    return this.score;
}

Player.prototype.setScore = function(score) {
    this.score = score;
}
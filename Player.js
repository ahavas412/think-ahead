function Player(nom, score) {
    this.nom = nom;
    this.score = score;
}

Joueur.prototype.afficherNom = function() {
    return this.nom;
}
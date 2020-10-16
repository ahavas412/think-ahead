function Cell(ligne, colonne) {
    this.ligne = ligne;
    this.colonne = colonne;
}

Cell.prototype.getLigne = function() {
    return this.ligne;
}

Cell.prototype.setLigne = function(ligne) {
    this.ligne = ligne;
}

Cell.prototype.getColonne = function() {
    return this.colonne;
}

Cell.prototype.setcolonne = function(colonne) {
    this.colonne = colonne;
}


try {
    module.exports = Player;
} catch {
    // Utile pour importer les classes à testé et ne pas crash en navigateur
}
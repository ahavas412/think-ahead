function Cell(ligne, colonne) {
    this.ligne = ligne;
    this.colonne = colonne;
}

Player.prototype.getligne = function() {
    return this.ligne;
}

Player.prototype.getcolonne = function() {
    return this.colonne;
}

Player.prototype.setcolonne = function(colonne) {
    this.colonne = colonne;
}
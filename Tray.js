function Tray(longueur, largeur, ) {
    this.longueur = longueur;
    this.largeur = largeur;
}

Tray.prototype.getLongueur = function() {
    return this.longueur;
}

Tray.prototype.getLargeur = function() {
    return this.largeur;
}

Tray.prototype.setlargeur = function(largeur) {
    this.largeur = largeur;
}
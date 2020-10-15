function Player(nom, point) {
    this.nom = nom;
    this.point = point;
}

Player.prototype.getNom = function() {
    return this.nom;
}

Player.prototype.getPoint = function() {
    return this.point;
}

Player.prototype.setPoint = function(point) {
    this.point = point;
}
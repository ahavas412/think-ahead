function Cell(value, isEnabled) {
    this.value = value;
    this.isEnabled = isEnabled;
}

Cell.prototype.getValue = function() {
    return this.value;
}

Cell.prototype.getisEnabled = function() {
    return this.isEnabled;
}

Cell.prototype.getColonne = function() {
    return this.colonne;
}

Cell.prototype.setcolonne = function(colonne) {
    this.colonne = colonne;
}

Cell.prototype.setisEnabled = function (isEnabled) {
    this.isEnabled = isEnabled;
}


try {
    module.exports = Cell;
} catch {
    // Utile pour importer les classes à testé et ne pas crash en navigateur
}
function Cell(value, isEnabled) {
    this.value = value;
    this.isEnabled = isEnabled;
}

Cell.prototype.getValue = function() {
    return this.value;
}

Cell.prototype.getIsEnabled = function() {
    return this.isEnabled;
}

Cell.prototype.setIsEnabled = function(isEnabled) {
    this.isEnabled = isEnabled;
}

try {
    module.exports = Cell;
} catch {
    // Utile pour importer les classes à testé et ne pas crash en navigateur
}
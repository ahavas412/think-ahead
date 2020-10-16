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

Cell.prototype.setisEnabled = function(isEnabled) {
    this.isEnabled = isEnabled;
}
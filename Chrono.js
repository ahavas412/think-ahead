function Chrono(time, subScore) {
    this.time = time;
    this.subScore = subScore;
}

Chrono.prototype.getTime = function() {
    return this.time;
}

Chrono.prototype.getSubScore = function() {
    return this.subScore;
}

Chrono.prototype.setSubScore = function(subScore) {
    this.subScore = subScore;
}

Chrono.prototype.getElapsedTime = function(player) {

}

Chrono.prototype.getChronoStart = function() {

}

Chrono.prototype.getReset = function() {

}
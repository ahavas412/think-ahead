function Chrono(time, subScore, currentTime) {
    this.time = time;
    this.subScore = subScore;
    this.currentTime = currentTime;
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

Chrono.prototype.getCurrentTime = function() {
    return this.currentTime;
}

Chrono.prototype.setCurrentTime = function(currentTime) {
    this.currentTime = currentTime;
}

Chrono.prototype.getElapsedTime = function(player) {

}

Chrono.prototype.ChronoStart = function() {
    this.ChronoDecrement(this.time);
}

Chrono.prototype.ChronoDecrement = function(time) {
    if (time > 0) {
        time--;
        setTimeout(this.ChronoDecrement(time), 1000);
    } else {
        this.Reset();
    }
}

Chrono.prototype.Reset = function() {

}

try {
    module.exports = Chrono;
} catch {
    // Utile pour importer les classes à testé et ne pas crash en navigateur
}
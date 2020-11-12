function Chrono(time, subScore) {
    this.time = time;
    this.subScore = subScore;
    this.currentTime = 0;
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
    this.setCurrentTime(this.getTime());
    this.ChronoDecrement(this.getTime());
}

Chrono.prototype.ChronoDecrement = function(time, chrono) {
    if (time > 0) {
        time--;
        chrono.setCurrentTime(time);
        setTimeout(this.ChronoDecrement(time), 1000);
    } else {
        this.Reset();
    }
}

Chrono.prototype.Reset = function() {
    setTimeout(this.ChronoStart(), 1000);
}

try {
    module.exports = Chrono;
} catch {
    // Utile pour importer les classes à testé et ne pas crash en navigateur
}
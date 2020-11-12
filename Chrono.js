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

Chrono.prototype.ChronoStart = function(chrono) {
    chrono.setCurrentTime(chrono.getTime());
    chrono.ChronoDecrement(chrono.getTime(), chrono);
}

Chrono.prototype.ChronoDecrement = function(chrono) {
    let timeT = chrono.getTime();
    if (chrono.getTime() > 0) {
        timeT--;
        chrono.setCurrentTime(timeT);
        console.log(this.getCurrentTime());
        setTimeout(this.ChronoDecrement(timeT), 1000);
    }
    /*else {
           this.Reset();
       }*/
}

/*Chrono.prototype.Reset = function() {
    setTimeout(this.ChronoStart(), 1000);
}*/

try {
    module.exports = Chrono;
} catch {
    // Utile pour importer les classes à testé et ne pas crash en navigateur
}
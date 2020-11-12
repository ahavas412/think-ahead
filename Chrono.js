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
    this.ChronoDecrement(this, false);
}

Chrono.prototype.ChronoDecrement = function(chrono, stop) {
        let timeT = chrono.getCurrentTime();
        if (timeT > 0 && stop == false) {
            timeT--;
            chrono.setCurrentTime(timeT);
            // Savoir si le joueur courant a joué

            //console.log(timeT);
            setTimeout(this.ChronoDecrement(chrono, false), 1000);
        }
        /*else {
               this.Reset();
               // Sinon SubScore si currentTime = 0
           }*/
    }
    // A voir si utile
    /*Chrono.prototype.Reset = function() {
        setTimeout(this.ChronoStart(), 1000);
    }*/

try {
    module.exports = Chrono;
} catch {
    // Utile pour importer les classes à testé et ne pas crash en navigateur
}
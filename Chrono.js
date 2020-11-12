function Chrono(time, subScore, player) {
    this.time = time;
    this.subScore = subScore;
    this.currentTime = 0;
    this.player = player;
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

Chrono.prototype.getPlayerChrono = function() {
    return this.player;
}

Chrono.prototype.getElapsedTime = function(player) {
    // A vérifier selon les règles pour la diminution du score
    player.setScore(player.getScore() - 6);
}

Chrono.prototype.ChronoStart = function(player) {
    this.setCurrentTime(this.getTime());
    this.ChronoDecrement(this, false, player);
}

Chrono.prototype.ChronoDecrement = function(chrono, stop, player) {
        let timeT = chrono.getCurrentTime();
        if (timeT > 0 && stop == false) {
            timeT--;
            chrono.setCurrentTime(timeT);
            // Savoir si le joueur courant a joué

            //console.log(timeT);
            setTimeout(function() { chrono.ChronoDecrement(chrono, false, player) }, 1000);
        } else {
            chrono.getElapsedTime(player);
        }
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
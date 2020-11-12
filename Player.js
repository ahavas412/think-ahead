function Player(name) {
    this.name = '';
    this.setName(name);
    this.score = 0;
}

Player.prototype.getName = function() {
    return this.name;
}

Player.prototype.setName = function(name) {
    // Check valid Name
    this.name = name;
}

Player.prototype.getScore = function() {
    return this.score;
}

Player.prototype.setScore = function(score) {
    this.score = score;
}

try {
    module.exports = Player;
} catch {
    // Utile pour importer les classes à testé et ne pas crash en navigateur
}
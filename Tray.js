function Tray(size) {
    this.size = size;
    this.trayAfterFactory = 0;
}

Tray.prototype.getSize = function() {
    return this.size;
}

Tray.prototype.setSize = function(size) {
    this.size = size;
}

Tray.prototype.getTrayAfterFactory = function() {
    return this.tray;
}

Tray.prototype.setTrayAfterFactory = function(trayAfterFactory) {
    this.tray = trayAfterFactory;
}

try {
    module.exports = Tray;
} catch {
    // Utile pour importer les classes à testé et ne pas crash en navigateur
}
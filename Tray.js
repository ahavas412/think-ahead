function Tray(size) {
    this.size = size;
    this.content = 0;
}

Tray.prototype.getSize = function() {
    return this.size;
}

Tray.prototype.setSize = function(size) {
    this.size = size;
}

Tray.prototype.getContent = function() {
    return this.content;
}

Tray.prototype.setContent = function(content) {
    this.content = content;
}

try {
    module.exports = Tray;
} catch {
    // Utile pour importer les classes à testé et ne pas crash en navigateur
}
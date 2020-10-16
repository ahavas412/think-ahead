function TrayFactory(tray) {
    this.tray = tray;
}

TrayFactory.prototype.getTray = function() {
    return this.tray;
}

TrayFactory.prototype.generateRandomNumber = function(min = -10, max = 15) {
    return Math.random() * (max - min) + min;
}

TrayFactory.prototype.createTray = function() {

    var tabCell = [];

    for (var i = 0; i < this.tray.getSize() - 1; i++) {
        for (var j = 0; j < this.tray.getSize() - 1; j++) {
            tabCell.push([new Cell(this.generateRandomNumber(), true)]);
        }
    }

    return tabCell;
}

try {
    module.exports = TrayFactory;
} catch {
    // Utile pour importer les classes à testé et ne pas crash en navigateur
}
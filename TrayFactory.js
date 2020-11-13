function TrayFactory() {
    //this.tray = tray;
}

/*TrayFactory.prototype.getTray = function() {
    return this.tray;
}*/

TrayFactory.prototype.generateRandomNumber = function(min = -10, max = 15) {
    return Math.round(Math.random() * (max - min) + min);
}

TrayFactory.prototype.createTray = function(tray) {

    var tabCell = [];

    for (var i = 0; i < tray.getSize() * tray.getSize(); i++) {
        tabCell.push([new Cell(this.generateRandomNumber(), true, i)]);
    }

    tray.setTrayAfterFactory(tabCell);

    return tabCell;
}

try {
    module.exports = TrayFactory;
} catch {
    // Utile pour importer les classes à testé et ne pas crash en navigateur
}
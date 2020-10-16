class TrayFactory
{
    generateTray() {
        
    }

    generateNumber(min = -10, max = 15) {
        return Math.random() * (max - min) + min;
    }
}

function TrayFactory(tray) {
    this.tray = tray;
}

TrayFactory.prototype.getTray = function() {
    return this.tray;
}

TrayFactory.prototype.createTray = function() {
    return null;
}

try {
    module.exports = TrayFactory;
} catch {
    // Utile pour importer les classes à testé et ne pas crash en navigateur
}
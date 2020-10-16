import 'Cell';

function TrayFactory(tray) {
    this.tray = tray;
}

TrayFactory.prototype.getTray = function() {
    return this.tray;
}

TrayFactory.prototype.createTray = function() {

}
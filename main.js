//let player = new Player('bob', 10);
//console.log(player.getNom());
var player1 = new Player("Jessy", 0);
var player2 = new Player("Augustin", 0);
var tray = new Tray(player1, player2, 4);
var trayFactory = new TrayFactory(tray);
console.log(trayFactory.createTray());
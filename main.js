//let player = new Player('bob', 10);

//const Chrono = require("./Chrono");

//console.log(player.getNom());
var player1 = new Player("Jessy", 0);
var player2 = new Player("Augustin", 0);
var tray = new Tray(player1, player2, 4);
var trayFactory = new TrayFactory(tray);
var tabCell = trayFactory.createTray();
console.log(tabCell);

for (let i = 0; i < tray.getSize() * tray.getSize(); i) {
    const ligne = document.createElement('tr');
    for (let j = 0; j < tray.getSize(); j++) {
        const colonne = document.createElement('td');
        colonne.innerHTML = '<button value="' + i + '">' + tabCell[i][0].getValue() + '</button>';
        ligne.appendChild(colonne);
        i++;
    }
    document.getElementById('tray').appendChild(ligne);
}

var chrono = new Chrono(10, 0);

console.log(chrono.ChronoStart());
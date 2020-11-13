/**
 * Constructeur de la classe TrayFactory
 *
 */
function TrayFactory() {
    //this.tray = tray;
}

/*TrayFactory.prototype.getTray = function() {
    return this.tray;
}*/

/**
 * Méthode qui va générer un nombre aléatoire
 * 
 * @param min Chiffre/Nombre minimum pour la génération aléatoire
 * @param max Chiffre/Nombre maximum pour la génération aléatoire
 *
 * @return int Retourne un nombre aléatoire respectant les fonctionnalités du jeu
 */
TrayFactory.prototype.generateRandomNumber = function(min = -10, max = 15) {
    return Math.round(Math.random() * (max - min) + min);
}

/**
 * Méthode qui va renvoyer un tableau contenant pour chaque indice une case (initialisation du tableau/ de son contenu)
 * 
 * @param tray Tableau qui va être généré
 *
 * @return int Retourne le tableau initialisé
 */
TrayFactory.prototype.createTray = function(tray) {

    var tabCell = [];

    for (var i = 0; i < tray.getSize() * tray.getSize(); i++) {
        tabCell.push([new Cell(this.generateRandomNumber(), true, i)]);
    }

    tray.setContent(tabCell);

    return tabCell;
}

try {
    module.exports = TrayFactory;
} catch {
    // Utile pour importer les classes à testé et ne pas crash en navigateur
}
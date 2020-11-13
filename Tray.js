/**
 * Constructeur de la classe Tray
 *
 * @param size La taille du tableau choisi par les joueurs
 *
 */
function Tray(size) {
    this.size = size;
    this.content = 0;
}

/**
 * Méthode get de l'attribut size de Tray
 *
 * @return int Retourne l'attribut size
 */
Tray.prototype.getSize = function() {
    return this.size;
}

/**
 * Méthode set de l'attribut size de Tray
 *
 * @param size Modifier la taille du tableau
 * 
 */
Tray.prototype.setSize = function(size) {
    this.size = size;
}

/**
 * Méthode get de l'attribut content de Tray
 *
 * @return int Retourne l'attribut content
 */
Tray.prototype.getContent = function() {
    return this.content;
}

/**
 * Méthode set de l'attribut content de Tray
 *
 * @param content Modifier l'attribut content
 * 
 */
Tray.prototype.setContent = function(content) {
    this.content = content;
}

try {
    module.exports = Tray;
} catch {
    // Utile pour importer les classes à testé et ne pas crash en navigateur
}
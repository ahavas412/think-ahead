/**
 * Constructeur de la classe Cell
 *
 * @param value La valeur qui est dans la case qui sert pour le score du joueur
 * @param isEnabled Savoir si la cellule a été selectionné (est autorisé)
 * @param num Le num de la case à la création du tableau (sert à savoir quelle case est sélectionné)
 *
 */
function Cell(value, isEnabled, num) {
    this.value = value;
    this.isEnabled = isEnabled;
    this.num = num;
}

/**
 * Méthode get de l'attribut value de Cell
 *
 * @return int Retourne l'attribut value
 */
Cell.prototype.getValue = function() {
    return this.value;
}

/**
 * Méthode get de l'attribut num de Cell
 *
 * @return int Retourne l'attribut num
 */
Cell.prototype.getNum = function() {
    return this.num;
}

/**
 * Méthode get de l'attribut isEnabled de Cell
 *
 * @return boolean Retourne l'attribut isEnabled
 */
Cell.prototype.getIsEnabled = function() {
    return this.isEnabled;
}

/**
 * Méthode set de l'attribut isEnabled de Cell
 *
 * @param isEnabled Modifier la variable isEnabled
 * 
 * @return boolean Retourne l'attribut isEnabled
 */
Cell.prototype.setIsEnabled = function(isEnabled) {
    this.isEnabled = isEnabled;
}

try {
    module.exports = Cell;
} catch {
    // Utile pour importer les classes à testé et ne pas crash en navigateur
}
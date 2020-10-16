function AbstractException(message) {
    //throw new TypeError('Abstract class cannot be instantiated directly');
    alert(message);
}

AbstractException().prototype.message = function(message) {
    return message;
}

try {
    module.exports = AbstractException;
} catch {
    // Utile pour importer les classes à testé et ne pas crash en navigateur
}
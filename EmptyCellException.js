function EmptyCellException(message) {
    AbstractException.call(this, message);
}

EmptyCellException().prototype.message = function() {
    AbstractException.prototype.message.call(this);
}

try {
    module.exports = EmptyCellException;
} catch {
    // Utile pour importer les classes à testé et ne pas crash en navigateur
}
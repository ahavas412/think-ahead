import 'AbstractException';

function BadParameterException(message) {
    AbstractException.call(this, message);
}

BadParameterException.prototype.message = function() {
    AbstractException.prototype.message.call(this);
}

try {
    module.exports = BadParameterException;
} catch {
    // Utile pour importer les classes à testé et ne pas crash en navigateur
}
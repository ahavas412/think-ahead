import 'AbstractException';

function BadParameterException(message) {
    AbstractException.call(this, message);
}

BadParameterException().prototype.message = function() {
    AbstractException.prototype.message.call(this);
}
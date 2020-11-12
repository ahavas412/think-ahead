import 'AbstractException';

function EmptyCellException(message) {
    AbstractException.call(this, message);
}

EmptyCellException().prototype.message = function() {
    AbstractException.prototype.message.call(this);
}
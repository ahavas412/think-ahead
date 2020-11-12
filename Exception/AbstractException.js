function AbstractException(message) {
    //throw new TypeError('Abstract class cannot be instantiated directly');
    alert(message);
}

AbstractException().prototype.message = function(message) {
    return message;
}
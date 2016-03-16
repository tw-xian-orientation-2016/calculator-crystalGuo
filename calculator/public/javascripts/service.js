function Service() {
}

Service.prototype.getNegative = function(number, callback) {
    $.post('/negation', {number: number}, function(result) {
        callback(result);
    });
}

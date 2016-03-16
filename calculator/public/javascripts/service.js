function Service() {
}

Service.prototype.getNegative = function(number, callback) {
    $.post('/negation', {number: number}, function(result) {
        callback(result);
    });
}

Service.prototype.getPercent = function(number, callback) {
    $.post('/percent', {number: number}, function(result) {
        callback(result);
    });
}


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

Service.prototype.getSum = function(number, callback) {
    $.post('/sum',  { number1: number[0], number2: number[1] }, function(result) {
        callback(result);
    });
}

Service.prototype.getSub = function(number, callback) {
    $.post('/sub',  { number1: number[0], number2: number[1] }, function(result) {
        callback(result);
    });
}

Service.prototype.getMultiply = function(number, callback) {
    $.post('/multiply',  { number1: number[0], number2: number[1] }, function(result) {
        callback(result);
    });
}

Service.prototype.getDiv = function(number, callback) {
    $.post('/div',  { number1: number[0], number2: number[1] }, function(result) {
        callback(result);
    });
}
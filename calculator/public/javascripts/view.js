var express;
var service;
var result;
var number;
var connector;

$(document).ready(function() {
    init();
    handleButton();
});

function init() {
    service = new Service();
    result = '0';
    $('#screen').val(result);
    number = [];
    connector = '';
}

function handleButton() {
    getNumber();
    clearNumber();
    setNegation();
    setPercent();
    setSum();
    setSub();
    setMultiply();
    setDiv();
    handleEqual();
}

function getNumber() {
    $('.number').on('click', function() {
        if (result === '0') {
            result = '';
        }
        result += $(this).html();
        $('#screen').val(result);
    });

    $('#dot').on('click', function() {
        if (result.indexOf('.') === -1) {
            result += $(this).html();
            $('#screen').val(result);
        }
    });
}

function clearNumber() {
    $('#clear').on('click', function() {
        result = '0';
        $('#screen').val(result);
        number = [];
        connector = '';
    });
}

function setNegation() {
    $('#negation').on('click', function() {
       if (result != '0') {
           service.getNegative($('#screen').val(), function(number) {
               result = number;
               $('#screen').val(result);
           });
       }

    });
}

function setPercent() {
    $('#percent').on('click', function() {
        if (result != '0') {
            service.getPercent($('#screen').val(), function(number) {
                result = number;
                $('#screen').val(result);
            });
        }

    });
}

function setSum() {
    $('#sum').on('click', function() {
        number.push(result);
        result = '0';

        if (connector != '' && number.length > 1) {
            handleConnector(connector);
        }

        connector = $(this).html();
    });
}

function setSub() {
    $('#sub').on('click', function() {
        number.push(result);
        result = '0';

        if (connector != '' && number.length > 1) {
            handleConnector(connector);
        }

        connector = $(this).html();
    });
}

function setMultiply() {
    $('#multiply').on('click', function() {
        number.push(result);
        result = '0';

        if (connector != '' && number.length > 1) {
            handleConnector(connector);
        }

        connector = $(this).html();
    });
}

function setDiv() {
    $('#div').on('click', function() {
        number.push(result);
        result = '0';

        if (connector != '' && number.length > 1) {
            handleConnector(connector);
        }

         connector = $(this).html();
    });
}

function handleEqual() {
    $('#equal').on('click', function() {
        number.push(result);
        result = '0';

        if (connector != '' && number.length > 1) {
            handleConnector2(connector);
        }

        connector = '';
    });
}

function handleConnector(connector) {
    if (connector === '+') {
        service.getSum(number, getResult);
    } else if (connector === '-') {
        service.getSub(number, getResult);
    } else if (connector === '÷') {
        service.getDiv(number, getResult);
    } else if (connector === '×') {
        service.getMultiply(number, getResult);
    }
}

function getResult(num) {
    result = num;
    $('#screen').val(result);
    number = [];
    number.push(result);
    result = '0';
}

function handleConnector2(connector) {
    if (connector === '+') {
        service.getSum(number, getResult2);
    } else if (connector === '-') {
        service.getSub(number, getResult2);
    } else if (connector === '÷') {
        service.getDiv(number, getResult2);
    } else if (connector === '×') {
        service.getMultiply(number, getResult2);
    }
}

function getResult2(num) {
    result = num;
    $('#screen').val(result);
    number = [];
}
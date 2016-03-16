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

function handleConnector(connector) {
    if (connector === '+') {
        service.getSum(number, function(sum) {
            result = sum;
            $('#screen').val(result);
            number = [];
            number.push(result);
            result = '';
        });
    } else if (connector === '-') {
        service.getSub(number, function(sub) {
            result = sub;
            $('#screen').val(result);
            number = [];
            number.push(result);
            result = '';
        });
    } else if (connector === '÷') {
        service.getDiv(number, function(div) {
            result = div;
            $('#screen').val(result);
            number = [];
            number.push(result);
            result = '';
        });
    } else if (connector === '×') {
        service.getMultiply(number, function(multiply) {
            result = multiply;
            $('#screen').val(result);
            number = [];
            number.push(result);
            result = '';
        });
    }
}

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

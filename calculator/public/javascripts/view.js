var express;
var service;
var result;
var number;
var connector;

$(document).ready(function() {
    init();
});

function init() {
    service = new Service();
    result = '0';
    $('#screen').val(result);
    number = [];
    connector = '';
}




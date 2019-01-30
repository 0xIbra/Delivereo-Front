$(document).ready(function (){
    // $('select').formSelect();
    $('.sidenav.sidebar').sidenav({ edge: 'left' });
    $('ul[class^="sidenav"]:not(.sidebar)').sidenav({ edge: 'right' });
    $('.tabs').tabs();
    $('.modal').modal();
    // $('.timepicker').timepicker({twelveHour: false});
    $('.dropdown-trigger').dropdown();
    $('.tooltip').tooltip();
});
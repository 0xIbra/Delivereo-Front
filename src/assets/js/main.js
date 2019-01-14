$(window).ready(function (){
    $('.sidenav.sidebar').sidenav({ edge: 'left' });
    $('ul[class^="sidenav"]:not(.sidebar)').sidenav({ edge: 'right' });
    $('.tabs').tabs();
    $('.modal').modal();
    $('select').formSelect();
    $('.timepicker').timepicker({twelveHour: false});
    $('.dropdown-trigger').dropdown();
    $('.tooltip').tooltip();
});
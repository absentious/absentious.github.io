$(function() {
   $(window).scroll(function () {
        var s_proc_top = $('#s_proc').offset().top;
        var s_proc_height = $('#s_proc').outerHeight();
        var s_intro_top = $('#s_intro').offset().top;
        var s_intro_height = $('#s_intro').outerHeight();

        function checkScroller() {
            s_proc_top = $('#s_proc').offset().top; //gets offset of header
            s_proc_height = $('#s_proc').outerHeight(); //gets height of header
            s_intro_top = $('#s_intro').offset().top; //gets offset of header
            s_intro_height = $('#s_intro').outerHeight(); //gets height of header
        }

        if($(window).scrollTop() > (s_proc_top + s_proc_height)){
            $('body').removeClass('changeColorB');
            $('body').addClass('changeColor');
            $('p').addClass('tcolor_norm');
            $('p').removeClass('tcolor_white2');
            $('h1').removeClass('tcolor_white2');
            $('span').removeClass('tcolor_light2');
        }
        if($(window).scrollTop() < (s_intro_top + s_intro_height)){
            console.log('orange');
            $('body').removeClass('changeColorB');
            $('p').removeClass('tcolor_white2');
            $('h1').removeClass('tcolor_white2');
            $('span').removeClass('tcolor_light2');
        }
        if($(window).scrollTop() > (s_intro_top + s_intro_height) && $(window).scrollTop() < (s_proc_top + s_proc_height)){
            console.log('black');
            $('body').addClass('changeColorB');
            $('body').removeClass('changeColor');
            $('p').removeClass('tcolor_norm');
            $('p').addClass('tcolor_white2');
            $('h1').addClass('tcolor_white2');
            $('span').addClass('tcolor_light2');
        }
        $(window).resize(checkScroller);
   });
});

$(document).ready(function() {
    // Optimalisation: Store the references outside the event handler:
    var $window = $(window);
    var $pane = $('#pane1');

    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize <= 1024) {
            $('body').addClass('w_mobile');
            $('body').removeClass('scr_a');
        }
        else {
            $('body').removeClass('w_mobile');
            $('body').addClass('scr_a');
        }
    }

    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});




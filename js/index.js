$(document).ready(function() {

    let scrollTop = $(".scrollTop");

    $(window).scroll(function() {

        let topPos = $(this).scrollTop();

        if (topPos > 100) {
            $(scrollTop).css("opacity", "1");
        } else {
            $(scrollTop).css("opacity", "0");
        }

    });

    $(scrollTop).click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });


    let link1 = $('#home').position();
    let link2 = $('#about').position();
    let link3 = $('#services').position();
    let link4 = $('#ourProjects').position();
    let link5 = $('#team').position();
    let link6 = $('#happyClient').position();
    let link7 = $('#prices').position();
    let link8 = $('#facts').position();
    let link9 = $('#contact').position();


    $('.homelink').click(function() {
        $('body, html').animate({
            scrollTop: link1.top
        }, 400);
        return false;
    });
    $('.aboutlink').click(function() {
        $('body, html').animate({
            scrollTop: link2.top
        }, 400);
        return false;
    });

    $('.serviceslink').click(function() {
        $('body, html').animate({
            scrollTop: link3.top
        }, 500);
        return false;
    });
    $('.projectslink').click(function() {
        $('body, html').animate({
            scrollTop: link4.top
        }, 800);
        return false;
    });
    $('.teamlink').click(function() {
        $('body, html').animate({
            scrollTop: link5.top
        }, 800);
        return false;
    });
    $('.clientlink').click(function() {
        $('body, html').animate({
            scrollTop: link6.top
        }, 800);
        return false;
    });
    $('.priceslink').click(function() {
        $('body, html').animate({
            scrollTop: link7.top
        }, 1000);
        return false;
    });
    $('.factslink').click(function() {
        $('body, html').animate({
            scrollTop: link8.top
        }, 1000);
        return false;
    });
    $('.contactlink').click(function() {
        $('body, html').animate({
            scrollTop: link9.top
        }, 1000);
        return false;
    });
    //show more - show slowly 

    $(".showslow").click(function() {
        $("#myDIV").toggle('slow');
    });



});
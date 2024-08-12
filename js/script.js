$(document).ready(function(){

    // ----- FUNZIONE MENU MOBILE -----
    if($(".header__hamburger")) {
        $(".header__hamburger").click(function(){
            $(".header__menu").toggleClass("show");
        });
    }


    // ----- FUNZIONE BOTTONE SCROLL TOP -----
    if($(".btn__scroll")) {
        $(window).scroll(function(){
            if($(window).scrollTop() > 300){ // Cambia il valore 300 con il numero di pixel desiderato
                $(".btn__scroll").fadeIn();
            } else {
                $(".btn__scroll").fadeOut();
            }
        });


        $(".btn__scroll").click(function(e){
            e.preventDefault()
            $("html, body").animate({scrollTop: 0}, "slow");
        });
    }


    // ----- FUNZIONE BOTTONE SCROLL NELLA HERO DELLA HOMEPAGE -----
    if($(".btn__scroll-section")) {
        $(".btn__scroll-section").click(function(e){
            e.preventDefault(); 
    
            var hrefValue = $(this).attr("href");
            var sectionOffset = $(hrefValue).offset().top;
    
            $("html, body").animate({scrollTop: sectionOffset}, "slow");
        });
    }


    // ----- FUNZIONE MENU DROPDOWN FOOTER -----
    if($('.menu__voice')) {
        $('.menu__voice').click(function(){
            var nav = $(this).next('.menu__nav');
            var icon = $(this).find('i');
        
            if (nav.is(':visible')) {
                $('.menu__nav').slideUp();
                icon.removeClass('fa-minus').addClass('fa-plus');
            } else {
                $('.menu__nav').slideUp();
                $('.menu__voice i').not(icon).removeClass('fa-minus').addClass('fa-plus');
                nav.slideDown();
                icon.removeClass('fa-plus').addClass('fa-minus');
            }
        });
    }


    // ----- FUNZIONE TAB INDEX E RISTORANTE -----
    if($('.menu-choice__results') && $('menu-choice__links a')) {
        $('.menu-choice__results').hide().first().show();
        var activeTabId = $('.menu-choice__results:visible').attr('id');
        $('.menu-choice__links a[href="#' + activeTabId + '"]').addClass('active');
        
        $('.menu-choice__links a').click(function(event){
            event.preventDefault();
            $('.menu-choice__links a').removeClass('active');
            $(this).addClass('active');
            $('.menu-choice__results').hide();
            var tabToShow = $(this).attr('href');
            $(tabToShow).show();
        });
    }
  

});
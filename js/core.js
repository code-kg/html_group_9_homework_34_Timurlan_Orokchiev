$(document).ready(function(){
    $('#menu-btn').click(function(){
        $('.navigate').slideToggle(700);
        if ($(this).hasClass('not-active')) {
            $(this).addClass('is-active').removeClass('not-active');
        }else{
            setTimeout(function(){
                $('.is-active').addClass('not-active').removeClass('is-active')
            },600)
        }
    });
    var headerHeight = $('.header-menu').height();
    $('a[href^="#"]').click( function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 500);
        }
        return false;
    });
});
$(window).scroll(function () {
    var scrollHead = $('#header');
    var scrollTop = $(this).scrollTop();
    var mainMenu = $('.header-menu');
    scrollHead.css('top', -(scrollTop * 0.4) + 'px');
    if($(this).scrollTop() >= $('header').height()) {
        mainMenu.addClass('stickytop');
    }
    else{
        mainMenu.removeClass('stickytop');
    }
    $('#contact-form').validate({
        rules: {
            name: {
                required: true,
            },
            phone: {
                required: true,
                minlength: 12
            },
            'e-mail': {
                required: true,
            }
        },
        messages: {
            name: {
                required: 'please fill in this field',
                email: 'please enter your name'
            },
            phone: {
                required: 'please fill in this field',
                minlength: 'please enter your phone number +996 312 123 456'
            },
            'e-mail': {
                required: 'please fill in this field',
                minlength: 'please enter your e-mail'
            }
        },
        errorElement: 'i'
    });
});
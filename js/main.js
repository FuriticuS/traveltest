$(document).ready(function(){
    // link scroll header
    $(".head-menu, .price-btn").on("click","a", function (event) {
        event.preventDefault();

        let id  = $(this).attr('href'), top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1000);
    });

    // button scroll up
    var btn = $('#button');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 400) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, 1000);
    });

    // slick slider
    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots:true,
        adaptiveHeight: true,
        easing:'ease',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1
                }
            }
        ]
    });

    // text animate
    $('.tlt').textillate({
        selector: '.texts',
        loop: true,
    });

    // accordion
    $('.accordion').accordion({
        active: true,
        collapsible: true,
        heightStyle: 'content',
        header: '> .accordion-item > .accordion-header'
    });

    // popup privacy policy
    $('a.myLinkModal').click( function(event){
        event.preventDefault();
        $('#myOverlay').fadeIn(297,	function(){
            $('#myModal')
                .css('display', 'block')
                .animate({opacity: 1}, 198);
        });
    });

    $('#myModal__close, #myOverlay').click( function(){
        $('#myModal').animate({opacity: 0}, 198, function(){
            $(this).css('display', 'none');
            $('#myOverlay').fadeOut(297);
        });
    });

    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('#myOverlay, #myModal').fadeOut();
        }
    });

    //popup menu header
    var $menu_popup = $('.menu-popup');

    $(".menu-triger, .menu-close").click(function(){
        $menu_popup.slideToggle(300, function(){
            if ($menu_popup.is(':hidden')) {
                $('body').removeClass('body_pointer');
            } else {
                $('body').addClass('body_pointer');
            }
        });
        return false;
    });

    $(document).on('click', function(e){
        if (!$(e.target).closest('.menu').length){
            $('body').removeClass('body_pointer');
            $menu_popup.slideUp(300);
        }
    });
});

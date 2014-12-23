$(function() {
    $('.header__hamburger, .header__close').click(function(event) {
        event.stopPropagation();
        event.preventDefault();
        $('.dropdown').toggleClass('open');
        $('.header__hamburger').toggleClass('open');
        $('.header__close').toggleClass('open');
        
    });
});

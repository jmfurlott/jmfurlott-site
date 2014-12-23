$(function() {
    $('.header__hamburger').click(function(event) {
        event.stopPropagation();
        event.preventDefault();
        $('.dropdown').toggleClass('open');
    });

});

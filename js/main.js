$(document).ready(function () {

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
        mousewheelControl: true,
        nextButton: '.navigation-down',
        prevButton: '.navigation-up',
        initialSlide: 1
    });

});
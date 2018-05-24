$(document).ready(function() {
    var scrollTop = 50;
    var scrollTopButton = 300;
    $(document).scroll(function(){
        var scroll =  $(document).scrollTop();
        scroll > scrollTop ? $('#header').addClass('fixed-theme') : $('#header').removeClass('fixed-theme');
        scroll > 300 ? $('.topbutton').fadeIn() : $('.topbutton').fadeOut();
        scroll < 300 ? scrollTopButton = 300 : scrollTopButton = scroll;
    });

    $('.topbutton').on('click',function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });

    $('.btn-download').on('click',function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(document).height()
        }, 800);
    });

    $('.click-contact').on('click',function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(document).height()
        }, 800);
    });
});
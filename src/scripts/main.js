$(document).ready(function() {
    var isClicked = false;
    $('.fa-search').on('click', function(e){
        var input = $('.input-search-menu').val();
        if (input.length == 0) {
            $('.input-search-menu').toggleClass('input-active');
            $('.input-search-menu').focus();
            isClicked = true;
            return;
        }
    });

    $('body').on('click',function(e){
        if (!isClicked) {
            $('.input-search-menu').val('');
            $('.input-search-menu').removeClass('input-active');
        }
        isClicked = false;
    });
    
    $('.input-search-menu').on('click',function(e){
        isClicked = true;
    });

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
});
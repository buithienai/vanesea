(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"E:\\Project\\BDS\\src\\scripts\\main.js":[function(require,module,exports){
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
},{}]},{},["E:\\Project\\BDS\\src\\scripts\\main.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGlzQ2xpY2tlZCA9IGZhbHNlO1xuICAgICQoJy5mYS1zZWFyY2gnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgdmFyIGlucHV0ID0gJCgnLmlucHV0LXNlYXJjaC1tZW51JykudmFsKCk7XG4gICAgICAgIGlmIChpbnB1dC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgJCgnLmlucHV0LXNlYXJjaC1tZW51JykudG9nZ2xlQ2xhc3MoJ2lucHV0LWFjdGl2ZScpO1xuICAgICAgICAgICAgJCgnLmlucHV0LXNlYXJjaC1tZW51JykuZm9jdXMoKTtcbiAgICAgICAgICAgIGlzQ2xpY2tlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xuICAgICAgICBpZiAoIWlzQ2xpY2tlZCkge1xuICAgICAgICAgICAgJCgnLmlucHV0LXNlYXJjaC1tZW51JykudmFsKCcnKTtcbiAgICAgICAgICAgICQoJy5pbnB1dC1zZWFyY2gtbWVudScpLnJlbW92ZUNsYXNzKCdpbnB1dC1hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBpc0NsaWNrZWQgPSBmYWxzZTtcbiAgICB9KTtcbiAgICBcbiAgICAkKCcuaW5wdXQtc2VhcmNoLW1lbnUnKS5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xuICAgICAgICBpc0NsaWNrZWQgPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgdmFyIHNjcm9sbFRvcCA9IDUwO1xuICAgIHZhciBzY3JvbGxUb3BCdXR0b24gPSAzMDA7XG4gICAgJChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBzY3JvbGwgPSAgJChkb2N1bWVudCkuc2Nyb2xsVG9wKCk7XG4gICAgICAgIHNjcm9sbCA+IHNjcm9sbFRvcCA/ICQoJyNoZWFkZXInKS5hZGRDbGFzcygnZml4ZWQtdGhlbWUnKSA6ICQoJyNoZWFkZXInKS5yZW1vdmVDbGFzcygnZml4ZWQtdGhlbWUnKTtcbiAgICAgICAgc2Nyb2xsID4gMzAwID8gJCgnLnRvcGJ1dHRvbicpLmZhZGVJbigpIDogJCgnLnRvcGJ1dHRvbicpLmZhZGVPdXQoKTtcbiAgICAgICAgc2Nyb2xsIDwgMzAwID8gc2Nyb2xsVG9wQnV0dG9uID0gMzAwIDogc2Nyb2xsVG9wQnV0dG9uID0gc2Nyb2xsO1xuICAgIH0pO1xuXG4gICAgJCgnLnRvcGJ1dHRvbicpLm9uKCdjbGljaycsZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogMFxuICAgICAgICB9LCA4MDApO1xuICAgIH0pO1xufSk7Il19

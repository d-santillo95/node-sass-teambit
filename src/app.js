window.$ = window.jQuery = require('jquery');
require('bootstrap/js/src/collapse.js');
// require('bootstrap/js/src/dropdown.js');

$(document).ready(function(){
    $(window).scroll(function() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            $('header').addClass('scrolled');
            $('.navbar').addClass('scrolled');
            $('.btn-header').addClass('scrolled')
        } else {
            $('header').removeClass('scrolled');
            $('.navbar').removeClass('scrolled');
            $('.btn-header').removeClass('scrolled')
        }
    });
})

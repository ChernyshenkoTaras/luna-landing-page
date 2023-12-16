$(function () {
  "use strict"
  $(window).on('load', function(event){
    $('.preloader').delay(500).fadeOut(500);
  });
  $(window).on('scroll', function (event) {
    var scroll = $ (window).scrollTop();
    if (scroll < 20) {
      $(".navbar-area").removeClass("sticky");
    } else{
      $(".navbar-area").addClass("sticky")
    }
  });


    
  
  
  
  
  
  // $(document).ready(function(){
    //         $('venobox').venobox();
    // });

     //wow js

    new WOW().init();
   
    //tiny slider
    var slider = tns ({
        container: '.feature-wrapper',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        mouseDrag:true,
        nav: false,
        controlsText: ['<i class="fa-solid fa-angle-left prev"></i>' , '<i class="fa-solid fa-angle-right next"></i>'],
      });

    //scrollit js
    $.scrollIt();

});
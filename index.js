 
//  ------------------------------------
//  script para menu que se contrae
//  ------------------------------------
 
const navSlide =() => {
  const burger = document.querySelector('.hambicon');
  const nav = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu li');

  
burger.addEventListener('click',() => {
      //Toggle Nav
  nav.classList.toggle('nav-active');
  
  //Animate Links
  //osea va a ser la animacion para cada uno de los links
  navLinks.forEach((link, index) => {
    if(link.style.animation){
      link.style.animation = '';
    }else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;  
      }
  });
});
}
$(document).ready(function() {
  // Transition effect for navbar 
  $(window).scroll(function() {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if($(this).scrollTop() > 700) { 
        $('.topnav').addClass('transparent');
        $('.topnav').addClass('sticky');
    } else {
        $('.topnav').removeClass('transparent');
        $('.topnav').removeClass('sticky');
    }
  });
});

const menu = () => {
  navSlide();

}
menu();
 

// ------------------------------
    $(".modal-button.radar").click(function() {
      $(".modal.radar").addClass("is-active");  
    });
    
    $(".delete").click(function() {
       $(".modal.radar").removeClass("is-active");
    });


    $(".modal-button.medicion").click(function() {
      $(".modal.medicion").addClass("is-active");  
    });
    
    $(".delete").click(function() {
       $(".modal.medicion").removeClass("is-active");
    });


    $(".modal-button.recepcion").click(function() {
      $(".modal.recepcion").addClass("is-active");  
    });
    
    $(".delete").click(function() {
       $(".modal.recepcion").removeClass("is-active");
    });


    $(".modal-button.info").click(function() {
      $(".modal.info").addClass("is-active");  
    });
    
    $(".delete").click(function() {
       $(".modal.info").removeClass("is-active");
    });

// ------------------------------





  // jQuery(document).ready(function( $ ) {

  
  //   // Hero rotating texts
  //   $("#hero .rotating").Morphext({
  //     animation: "flipInX",
  //     separator: ",",
  //     speed: 3000
  //   });
    
  //   // Initiate the wowjs
  //   new WOW().init();
    
  //   // Initiate superfish on nav menu
  //   $('.nav-menu').superfish({
  //     animation: {opacity:'show'},
  //     speed: 400
  //   });
    
  //   // Mobile Navigation
  //   if( $('#nav-menu-container').length ) {
  //       var $mobile_nav = $('#nav-menu-container').clone().prop({ id: 'mobile-nav'});
  //       $mobile_nav.find('> ul').attr({ 'class' : '', 'id' : '' });
  //       $('body').append( $mobile_nav );
  //       $('body').prepend( '<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>' );
  //       $('body').append( '<div id="mobile-body-overly"></div>' );
  //       $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');
        
  //       $(document).on('click', '.menu-has-children i', function(e){
  //           $(this).next().toggleClass('menu-item-active');
  //           $(this).nextAll('ul').eq(0).slideToggle();
  //           $(this).toggleClass("fa-chevron-up fa-chevron-down");
  //       });
        
  //       $(document).on('click', '#mobile-nav-toggle', function(e){
  //           $('body').toggleClass('mobile-nav-active');
  //           $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
  //           $('#mobile-body-overly').toggle();
  //       });
        
  //       $(document).click(function (e) {
  //           var container = $("#mobile-nav, #mobile-nav-toggle");
  //           if (!container.is(e.target) && container.has(e.target).length === 0) {
  //              if ( $('body').hasClass('mobile-nav-active') ) {
  //                   $('body').removeClass('mobile-nav-active');
  //                   $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
  //                   $('#mobile-body-overly').fadeOut();
  //               }
  //           }
  //       });
  //   } else if ( $("#mobile-nav, #mobile-nav-toggle").length ) {
  //       $("#mobile-nav, #mobile-nav-toggle").hide();
  //   }
    
  //   // Stick the header at top on scroll
  //   $("#header").sticky({topSpacing:0, zIndex: '50'});
  
  //   // Smoth scroll on page hash links
  //   $('a[href*="#"]:not([href="#"])').on('click', function() {
  //       if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  //           var target = $(this.hash);
  //           if (target.length) {
                
  //               var top_space = 0;
                
  //               if( $('#header').length ) {
  //                 top_space = $('#header').outerHeight();
  //               }
                
  //               $('html, body').animate({
  //                   scrollTop: target.offset().top - top_space
  //               }, 1500, 'easeInOutExpo');
  
  //               if ( $(this).parents('.nav-menu').length ) {
  //                 $('.nav-menu .menu-active').removeClass('menu-active');
  //                 $(this).closest('li').addClass('menu-active');
  //               }
  
  //               if ( $('body').hasClass('mobile-nav-active') ) {
  //                   $('body').removeClass('mobile-nav-active');
  //                   $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
  //                   $('#mobile-body-overly').fadeOut();
  //               }
                
  //               return false;
  //           }
  //       }
  //   });
    
  //   // Back to top button
  //   $(window).scroll(function() {
  
  //       if ($(this).scrollTop() > 100) {
  //           $('.back-to-top').fadeIn('slow');
  //       } else {
  //           $('.back-to-top').fadeOut('slow');
  //       }
        
  //   });
    
  //   $('.back-to-top').click(function(){
  //       $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
  //       return false;
  //   });

    
  
  // });
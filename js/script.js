
$(document).ready(function() {

// For the sticky navigation - waypoint ==============================================================================================================
     $('.js--section-features').waypoint(function(direction) {
          if (direction == "down") {
               $('nav').addClass('sticky');
          } else {
               $('nav').removeClass('sticky');
          }
     }, {
          offset: '100px'
     });

// Scroll on main cta buttons ==============================================================================================================
/*     $('.js--scroll-to-plans').click(function() {
          $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
     });

     $('.js--scroll-to-start').click(function() {
          $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
     });
*/

// Navigation scroll ============================================================================================================== got this from css-tricks

     // URL updates and the element focus is maintained
     // originally found via in Update 3 on http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links

     // filter handling for a /dir/ OR /indexordefault.page
     function filterPath(string) {
          return string
          .replace(/^\//, '')
          .replace(/(index|default).[a-zA-Z]{3,4}$/, '')
          .replace(/\/$/, '');
     }
     
     var locationPath = filterPath(location.pathname);
     $('a[href*="#"]').each(function () {
          var thisPath = filterPath(this.pathname) || locationPath;
          var hash = this.hash;
          if ($("#" + hash.replace(/#/, '')).length) {
          if (locationPath == thisPath && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/, '')) {
          var $target = $(hash), target = this.hash;
          if (target) {
               $(this).click(function (event) {
               event.preventDefault();
               $('html, body').animate({scrollTop: $target.offset().top}, 1000, function () {
                    location.hash = target; 
                    $target.focus();
                    if ($target.is(":focus")){ //checking if the target was focused
                    return false;
                    }else{
                    $target.attr('tabindex','-1'); //Adding tabindex for elements not focusable
                    $target.focus(); //Setting focus
                    };
               });       
               });
          }
          }
          }
     });

});   

   /* this doesn't update the URL this is also from css-tricks
     // Select all links with hashes
     $('a[href*="#"]')
     // Remove links that don't actually link to anything
     .not('[href="#"]')
     .not('[href="#0"]')
     .click(function(event) {
     // On-page links
     if (
     location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
     && 
     location.hostname == this.hostname
     ) {
     // Figure out element to scroll to
     var target = $(this.hash);
     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
     // Does a scroll target exist?
     if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
          scrollTop: target.offset().top
          }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
               return false;
          } else {
               $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
               $target.focus(); // Set focus again
          };
          });
     }
     }
     });*/



// var waypoints = $('#handler-first').waypoint(function(direction) {
//      notify(this.element.id + ' hit 25% from top of window') 
//    }, {
//      offset: '25%'
//    })
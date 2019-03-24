//  Document ready
$(function() {
  $('.mobile-nav-icon').click(function() {
     // Hide and show navigation
     $('.nav').toggle();
     // Mobile menu icon animaton
     $('.bar1').toggleClass('change1');
     $('.bar2').toggleClass('change2');
     $('.bar3').toggleClass('change3');
   });
});

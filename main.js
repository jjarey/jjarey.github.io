//  Document ready
$(function() {
  // Event handler for hamburger menu
  $('.mobile-nav-icon').click(function() {
    // Hide and show navigation on click
    $('.nav').toggle();
    // Mobile menu icon animaton
    $('.bar1').toggleClass('change1');
    $('.bar2').toggleClass('change2');
    $('.bar3').toggleClass('change3');
  });
  // Event handler for details buttons
  $('.details-button').click(function() {
    // Show details on click
    $(this).next('.details').toggle();
  });
});

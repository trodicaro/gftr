$(document).on('page:load', function() {//turbolinks
  $(document).foundation();
});
jQuery(document).ready(function($) {
  $("#getstarted").click(function(e) {
    e.preventDefault();
    hide("#startcontainer");
    show("#options");
    scrollTo(this.hash);
    window.dispatchEvent(new Event('resize'));
  }); 
  $("#friends, #group, #master").click(function(e) {
    e.preventDefault();
    $("#options").css('position', "absolute");
    hide("#options");
    show("#signup");
    window.dispatchEvent(new Event('resize'));
  }); 
  $("#navlogo").click(function(e) {
    e.preventDefault();
    scrollTo(this.hash);
  });
  if ($(window).width() < 640) {
    $("#friends, #group, #master").click(function(e) {
      scrollTo(this.hash);
    });
  };
});
function hide(el) {
  $(el).fadeOut(400);
};
function show(el) {
  $(el).fadeIn(400);
  $(el).css("display", "table");
};
function scrollTo(el) {
  $('html, body').stop().animate({
      'scrollTop': $(el).offset().top
  }, 400, 'swing');
};
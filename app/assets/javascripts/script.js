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
});
function hide(el) {
  $(el).fadeOut(400);
};

function show(el) {
  $(el).fadeIn(400);
};
function scrollTo(el) {
  $('html, body').stop().animate({
      'scrollTop': $(el).offset().top
  }, 400, 'swing');
};

$('#getstarted').on('click', function() {
  ga('send', 'event', 'Start', 'getStarted');
});
$('#friends').on('click', function() {
  ga('send', 'event', 'Choose', 'friends');
});
$('#group').on('click', function() {
  ga('send', 'event', 'Choose', 'community');
});
$('#master').on('click', function() {
  ga('send', 'event', 'Choose', 'master');
});
$('#submit').on('click', function() {
  ga('send', 'event', 'SignUp', 'signup');
});
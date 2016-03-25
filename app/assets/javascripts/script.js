$(document).on('page:load', function() {//turbolinks
  $(document).foundation();
});

jQuery(document).ready(function($) {
  $("#getstarted").click(function(e) {
    e.preventDefault();
    hide("#getstarted");
    show("#options");
    //SHUFFLE BEGIN
    var maindiv = $("#shuffle");
    var divs = maindiv.children();
    while (divs.length) {
        maindiv.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
    //SHUFFLE END
    scrollTowards(this.hash);
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
//    console.log(this.hash);
    scrollTowards(this.hash);
  });
  if ($(window).width() < 640) {
    $("#friends, #group, #master").click(function(e) {
      scrollTowards(this.hash);
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
function scrollTowards(el) {
  $('html, body').stop().animate({
      'scrollTop': $(el).offset().top
  }, 400, 'swing');
};
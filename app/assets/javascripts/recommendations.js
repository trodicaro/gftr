var resizeListener;
function myfunction() {
  clearTimeout(resizeListener);
  resizeListener = setTimeout(function(){
    $('.savebar-push').each(function() {
      $(this).css("height", "");
      $(this).height($('.savebar').height());
    });
  });
}

$(window).resize(myfunction);

var foo;

jQuery(document).ready(function($) {
  $('input[type="checkbox"]').click(function() {
//    console.log("woohoo");
    $('#test2').text(document.querySelectorAll('input[type="checkbox"]:checked').length);
//    console.log(document.querySelectorAll('input[type="checkbox"]:checked').length);
//    foo = document.querySelectorAll('input[type="checkbox"]:checked').length
  });
});
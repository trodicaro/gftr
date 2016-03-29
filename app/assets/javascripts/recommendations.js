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
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

$(document).ready(function(){
	$('#save-options').click(function(){
		$('#userform').show();
		$('#hello_message').hide();
	});
})

$(window).resize(myfunction);
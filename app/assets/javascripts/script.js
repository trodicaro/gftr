$(document).on('page:load', function() {//turbolinks
  $(document).foundation();
});

$('#getstarted').on('click', function() {
  ga('send', 'event', 'Share', 'sendEmail');
});
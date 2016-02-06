$(document).on('page:load', function() {//turbolinks
  $(document).foundation();
});

function showOptions() {
  var options = document.getElementById("options");
  var container = document.getElementById("startcontainer");
  options.style.display="block";
  container.style.display="none";
  window.dispatchEvent(new Event('resize'));
};

function showForm() {
  var form = document.getElementById("signup");
  var options = document.getElementById("options");
  options.style.display = "none";
  form.style.display="block";
  window.dispatchEvent(new Event('resize'));
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
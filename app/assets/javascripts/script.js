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

//COUNTDOWN
$(function(){
//  console.log(new Date().getTime());
//	var note = $('#note'),
//		ts = new Date(2017, 0, 1),
		ts = new Date().getTime() + 10*60*1000;//add 10 minutes
//		newYear = true;

//	if((new Date()) > ts){
//		// The new year is here! Count towards something else.
//		// Notice the *1000 at the end - time must be in milliseconds
////		ts = (new Date()).getTime() + 10*24*60*60*1000;
//
////		newYear = false;
//	}
	$('#countdown').countdown({
		timestamp	: ts,
//		callback	: function(days, hours, minutes, seconds){
		callback	: function(minutes, seconds){
//			var message = "";
//
//			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
//			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
//			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
//			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
//			if(newYear){
//				message += "left until the new year!";
//			}
//			else {
//				message += "left to 10 days from now!";
//			}
//			note.html(message);
		}
	});

});

//////PLUGIN
(function($){

	// Number of seconds in every time division
	var days	= 24*60*60,
		hours	= 60*60,
		minutes	= 60;

	// Creating the plugin
	$.fn.countdown = function(prop){

		var options = $.extend({
			callback	: function(){},
			timestamp	: 0
		},prop);

//		var left, d, h, m, s, positions;
		var left, m, s, positions;

		// Initialize the plugin
		init(this, options);

		positions = this.find('.position');

		(function tick(){

			// Time left
//			left = Math.floor((options.timestamp - (new Date())) / 1000);
			left = Math.floor((options.timestamp - (new Date())) / 1000);

			if(left < 0){
				left = 0;
			}

			// Number of days left
//			d = Math.floor(left / days);
//			updateDuo(0, 1, d);
//			left -= d*days;

			// Number of hours left
//			h = Math.floor(left / hours);
//			updateDuo(2, 3, h);
//			left -= h*hours;

			// Number of minutes left
			m = Math.floor(left / minutes);
			updateDuo(4, 5, m);
			left -= m*minutes;

			// Number of seconds left
			s = left;
			updateDuo(6, 7, s);

			// Calling an optional user supplied callback
//			options.callback(d, h, m, s);
			options.callback(m, s);

			// Scheduling another call of this function in 1s
			setTimeout(tick, 1000);
		})();

		// This function updates two digit positions at once
		function updateDuo(minor,major,value){
			switchDigit(positions.eq(minor),Math.floor(value/10)%10);
			switchDigit(positions.eq(major),value%10);
		}

		return this;
	};

function init(elem, options){
		elem.addClass('countdownHolder');

		// Creating the markup inside the container
//		$.each(['Days','Hours','Minutes','Seconds'],function(i){
//			$('<span class="count'+this+'">').html(
//				'<span class="position">\
//					<span class="digit static">0</span>\
//				</span>\
//				<span class="position">\
//					<span class="digit static">0</span>\
//				</span>'
//			).appendTo(elem);
//
//			if(this!="Seconds"){
//				elem.append('<span class="countDiv countDiv'+i+'"></span>');
//			}
//		});
//        $.each(['Days','Hours','Minutes','Seconds'],function(i){
//			$('<span class="count'+this+'">').html(
//				'<span class="position">\
//					<span class="digit static">0</span>\
//				</span>\
//				<span class="position">\
//					<span class="digit static">0</span>\
//				</span>'
//			).appendTo(elem);
//
//			if(this!="Seconds"){
//				elem.append('<span class="countDiv countDiv'+i+'"></span>');
//			}
//		});

	}

	// Creates an animated transition between the two numbers
	function switchDigit(position,number){

		var digit = position.find('.digit')

		if(digit.is(':animated')){
			return false;
		}

		if(position.data('digit') == number){
			// We are already showing this number
			return false;
		}

		position.data('digit', number);

		var replacement = $('<div>',{
			'class':'digit',
			css:{
				top:'-2.1em',
				opacity:0
			},
			html:number
		});

		// The .static class is added when the animation
		// completes. This makes it run smoother.

		digit
			.before(replacement)
			.removeClass('static')
			.animate({top:'2.5em',opacity:0},'fast',function(){
				digit.remove();
			})

		replacement
			.delay(100)
			.animate({top:0,opacity:1},'fast',function(){
				replacement.addClass('static');
			});
	}
})(jQuery);
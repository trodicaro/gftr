var main = function() { //script for ticker
    marqueeInit({
    uniqueid: 'mycrawler',
    style: {
        'padding': '15px',
        'width': '100vw',
        'background': 'transparent',
        'border': 'none',
//        'font-size': '120%',
        'height': '45px',
        'margin-bottom': '10px'
    },
    inc: 0, //speed - pixel increment for each iteration of this marquee's movement
    mouse: 'cursor driven', //mouseover behavior ('pause' 'cursor driven' or false)
    moveatleast: 1,
    neutral: 150,
    savedirection: true
    });
}

//script for height & vertical align
var resizeListener;
var pause = 100; //pause time
function myfunction() {
        clearTimeout(resizeListener);
        resizeListener = setTimeout(function(){
            $('.Features').each(function() {
                var height = [];
                $(this).find('.col-sm-4 > div').each(function() {
                    $(this).css("height", "");
                    height.push($(this).height());
                });
                if ($(window).width() > 767) {
                    $(this).find('.col-sm-4 > div').height(Math.max.apply(null, height));
                };
            });
        }, pause);
};

$(document).ready(main);
$(document).on('page:load', main);
myfunction(); //call on initial page load
$(window).resize(myfunction);


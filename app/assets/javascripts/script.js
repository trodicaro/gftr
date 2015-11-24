var resizeListener;
var resizeTimer;
var pause = 100; //pause time
var clearActive;

var main = function() { 
    
    //navbar color on scroll
    
    $(window).scroll(function() {
        if ($(document).scrollTop() > $("#navigation").height()) {
            $("#navigation").addClass("bodynav");
            myfunction();
        } else {
            $("#navigation").removeClass("bodynav");
            myfunction();
        }
        if (clearActive == 0) {
            $('#nav li').each(function() {
                $(this).removeAttr('id');
            });
        };
    });;
    
    //scroll timer for clearing navbar border
    
    $(window).on('scroll', function(e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            clearActive = 0;
        }, 150);
    });

    //navbar toggle active id on click 
      
    $('#nav li').click(function() {
        clearActive = 1;
        if (!($(this).attr('id'))) {
            $('#nav li').each(function() {
              $(this).removeAttr('id');
            });
            $(this).attr('id', 'active');
        };
    });
    $("#menu-toggle .row a:first-child").click(function() {
        $("#menu-toggle .row a:first-child").each(function() {
            $(this).removeAttr('id');
        });
            $(this).attr('id', 'active');
        $("#menu-toggle").slideToggle(75);
    });
      
    //navbar toggle & slide down #menu-toggle
        
    $("#menu-button, #mini-menu-button").click(function(event) {
        $("#menu-toggle").slideToggle(75);
        event.stopPropagation();
        $("#menu-toggle .row a:first-child").each(function() {
            $(this).removeAttr('id');
        });
    });
    
    //navbar swing click
    
    $('#nav a, #menu-toggle a').on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing');
    });
    
    // ticker script
    
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
};

var myfunction = function() {
    clearTimeout(resizeListener);
    resizeListener = setTimeout(function(){

        // Features all 3 div's same height

//        $('.Features').each(function() {
//            var height = [];
//            $(this).find('.col-sm-4 > div').each(function() {
//                $(this).css("height", "");
//                height.push($(this).height());
//            });
//            if ($(window).width() > 767) {
//                $(this).find('.col-sm-4 > div').height(Math.max.apply(null, height));
//            };
//        });

        // Social two div's same height 

        $(".social").each(function() {
            var height = [];
            $(this).find('.col-md-6 > div').each(function() {
                $(this).css("height", "");
                height.push($(this).height());
            });
            if ($(window).width() > 991) {
                $(this).find('.col-md-6 > div').height(Math.max.apply(null, height));
            };
        });

        // Vote cover image full height
        
        $(".container-fluid.vote").each(function() {
            var height = $(".container-fluid.vote").height() + 80;
            $('<style>.vote:before {height: ' + height + 'px;}</style>').appendTo('head');//bc can't directly change height
        });

        // FeaturesTop two div's same height

        $(".featuresTop").each(function() {
            var height = [];
            $(this).find('.col-md-4 > div, .col-md-8 > div').each(function() {
                $(this).css("height", "");
                height.push($(this).height());
            });
            if ($(window).width() > 991) {
                $(this).find('.col-md-4 > div, .col-md-8 > div').height(Math.max.apply(null, height));
            };
        });

        // Navbar hide #menu-toggle if screen too big

        if ($(window).width() > 767 && $("#menu-toggle").css("display", "block")) {
        $("#menu-toggle").css("display", "none");
        };
        
    }, pause);
}

$(document).ready(main).ready(myfunction);
$(document).on('page:load', main).on('page:load', myfunction);
$(window).resize(myfunction);
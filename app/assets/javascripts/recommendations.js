var resizeListener;

function myfunction() {
    clearTimeout(resizeListener);
    resizeListener = setTimeout(function() {
        $('.savebar-push').each(function() {
            $(this).css("height", "");
            $(this).height($('.savebar').height());
        });
    });
}

$(window).resize(myfunction);

var foo;

$(function() {
    $('input[type="checkbox"]').click(function() {
        //    console.log("woohoo");
        $('#test2').text(document.querySelectorAll('input[type="checkbox"]:checked').length);
        //    console.log(document.querySelectorAll('input[type="checkbox"]:checked').length);
        //    foo = document.querySelectorAll('input[type="checkbox"]:checked').length
    });

    function sendAnalytics(eventCategory, eventAction) {
        ga('send', 'event', eventCategory, eventAction);
    };
    //
    $('#click-panic').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('Help', 'moreHelp');
    });

    $('#save-options').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('Save', 'saveIdeas');
    });

    $('#rerun-algorithm').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('moreHelp', 'rerunAlgorithm');
    });

    $('#gift-concierge').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('moreHelp', 'giftConcierge');
    });

     $('#second-opinion').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('moreHelp', 'secondOpinion');
    });
});
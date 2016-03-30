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

$(function() {

    function sendAnalytics(eventCategory, eventAction) {
    	ga('send', 'event', eventCategory, eventAction);
    };

    $('#click-panic').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('Help', 'moreHelp');        
    });
});
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
    $('input[type="checkbox"]').click(function() {

        var ideasCount = document.querySelectorAll('input[type="checkbox"]:checked').length;

        if (ideasCount > 0) {
            $('#ideasCounter').text(ideasCount);
            $('#option1').css("display", "inherit");
            $('#option2').css("display", "none");
            if (ideasCount == 1) {
                $('#ideasPlural').text(" idea.");
            } else {
                $('#ideasPlural').text(" ideas.");
            }
        } else {
            $('#option1').css("display", "none");
            $('#option2').css("display", "inherit");
        }
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

    $('#yesinfo1').click(function(){
   			$('#yesinfo').hide(); 	
    });

     $('#maybeinfo1').click(function(){
   			$('#maybeinfo').hide(); 	
    });
});
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

        $(this).closest('form').submit();
    });


    function sendAnalytics(eventCategory, eventAction) {
        ga('send', 'event', eventCategory, eventAction);
    };
    //ANALYTICS MAIN PAGE

    //IDEA ACTIONS
    $('#yes-idea-1').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('IdeaActions', 'yes-1');
    });

    $('#maybe-idea-1').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('IdeaActions', 'maybe-1');
    });
    $('#maybe-idea-1-join').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('IdeaActions', 'maybe-1-join');
    });
    $('#maybe-idea-2').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('IdeaActions', 'maybe-2');
    });
    $('#maybe-idea-2-join').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('IdeaActions', 'maybe-2-join');
    });
    $('#maybe-idea-3').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('IdeaActions', 'maybe-3');
    });
    $('#maybe-idea-3-join').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('IdeaActions', 'maybe-3-join');
    });

    $('#save-idea-1').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('IdeaActions', 'save-1');
    });

    $('#yes-idea-2').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('IdeaActions', 'yes-2');
    });

    $('#maybe-idea-2').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('IdeaActions', 'maybe-2');
    });

    $('#save-idea-2').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('IdeaActions', 'save-2');
    });

    $('#yes-idea-3').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('IdeaActions', 'yes-3');
    });

    $('#maybe-idea-3').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('IdeaActions', 'maybe-3');
    });

    $('#save-idea-3').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('IdeaActions', 'save-3');
    });

    //PANIC BUTTON
    $('#click-panic').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('Help', 'moreHelp');
    });

    //SAVE VISITOR
    $('#save-options').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('Save', 'saveIdeas');
    });


    //MORE INFO PAGE

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

    //GIFT ACTIONS SECTION TOGGLE
    $('#yes-idea-1').click(function() {
        $('#yesinforow1').slideToggle(200);
    });
    $('#yes-idea-2').click(function() {
        $('#yesinforow2').slideToggle(200);
    })
    $('#yes-idea-3').click(function() {
        $('#yesinforow3').slideToggle(200);
    })

    $('#maybe-idea-1').click(function() {
        $('#maybeinforow1').slideToggle(200);
    });
   $('#maybe-idea-2').click(function() {
        $('#maybeinforow2').slideToggle(200);
    });
   $('#maybe-idea-3').click(function() {
        $('#maybeinforow3').slideToggle(200);
    });

});
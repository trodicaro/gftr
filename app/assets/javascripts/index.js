$(function() {
    function sendAnalytics(eventCategory, eventAction, eventLabel) {
        ga('send', 'event', eventCategory, eventAction, eventLabel);
    };

    $('#joinsection').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('Interactions', 'clicked', 'Nav: Join the Fun');
    });

    $('#join-exist').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('Interactions', 'clicked', 'Join the Fun1');
    });
    $('#join-group').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('Interactions', 'clicked', 'Join the Fun2');
    });

    // $('#about-us').on("click", function(event) {
    //     event.preventDefault();
    //     sendAnalytics('Interactions', 'clicked', 'About Us');
    // });
});
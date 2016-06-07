   function sendAnalytics(eventCategory, eventAction) {
       ga('send', 'event', eventCategory, eventAction, eventLabel);
   };

   $('#join-exist').on("click", function(event) {
       event.preventDefault();
       sendAnalytics('Interactions', 'clicked', 'Join the Fun');
   });

   $('#about-us').on("click", function(event) {
       event.preventDefault();
       sendAnalytics('Interactions', 'clicked', 'About Us');
   });
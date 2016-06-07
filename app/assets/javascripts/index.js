   function sendAnalytics(eventCategory, eventAction) {
       ga('send', 'event', eventCategory, eventAction, eventLabel);
   };

   $('#join-exist').on("click", function(event) {
       event.preventDefault();
       sendAnalytics('Interactions', 'clicked', 'Join the Fun1');
   });
  $('#join-group').on("click", function(event) {
       event.preventDefault();
       sendAnalytics('Interactions', 'clicked', 'Join the Fun2');
   });

   $('#about-us').on("click", function(event) {
       event.preventDefault();
       sendAnalytics('Interactions', 'clicked', 'About Us');
   });
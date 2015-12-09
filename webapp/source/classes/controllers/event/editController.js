define(['app/model/event'], function(Event) {
	'use strict';

  var EditEventController = function($scope, $routeParams, $location, EventRepository) {
    this.scope = $scope;

    EventRepository.get(
      { id:$routeParams.eventId },
      function(event) {
        event.times.begin = new Date(event.times.begin);
        event.times.end = new Date(event.times.end);
        this.scope.event = event;

        this.scope.edit = function(event) {
          EventRepository.edit(
            event,
            function(event) {
              $location.path('/events/'+event.id);
            },
            function() {}
          );
        };
      }.bind(this),
      function() {}
    );
  }

	return EditEventController;
});

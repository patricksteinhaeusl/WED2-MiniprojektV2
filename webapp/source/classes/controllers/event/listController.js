define(['app/model/event'], function(Event) {
	'use strict';

	var EventListController = function($scope, $location, eventRepository) {
		this.scope = $scope;
		eventRepository.all(
			function(events) {

        this.scope.events = events;

        this.scope.redirectEventDetail = function(event) {
          window.location.href = "/#/events/" + event.id;
        }

			}.bind(this),
			function() {}
		);
	};

	return EventListController;
});

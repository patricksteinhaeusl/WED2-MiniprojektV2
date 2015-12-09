define(['app/model/guest'], function(Guest) {
	'use strict';

	var AddGuestController = function($scope, $routeParams, $location, GuestRepository) {

		this.scope = $scope;
    this.scope.eventId = $routeParams.eventId;
		this.scope.guest = new Guest();

		this.scope.add = function(newGuest) {
			GuestRepository.add(
        { id:$routeParams.eventId },
        newGuest,
				function(newGuest) {
					$location.path('/events/'+$routeParams.eventId);
				},
				function() {}
			);
		};
	};

	return AddGuestController;
});

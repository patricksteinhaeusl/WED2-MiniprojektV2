define(['app/model/guest'], function(Guest) {
	'use strict';

  var EditGuestController = function($scope, $routeParams, $location, GuestRepository) {

    this.scope = $scope;
    this.scope.eventId = $routeParams.eventId;

    GuestRepository.get(
      { id:$routeParams.eventId },
      { id:$routeParams.guestId },
      function(guest) {
        //guest.canceled.toString();
        this.scope.guest = guest;

        this.scope.edit = function(guest) {
          GuestRepository.edit(
            { id:$routeParams.eventId },
            guest,
            function(guest) {
              $location.path('/events/'+$routeParams.eventId);
            },
            function() {}
          );
        };
      }.bind(this),
      function() {}
    );
  }

	return EditGuestController;
});

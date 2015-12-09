define(['app/model/guest'], function(Guest) {
	'use strict';

	var GuestRepository = function($http, Configuration) {
    /**
     * Find guest by identifier
     *
     * @param string identifier
     */
    this.get = function(event, guest, successCallback, errorCallback) {
      $http.get(Configuration.urls.guests.byId.replace('{eventId}', event.id).replace('{guestId}', guest.id))
        .success(function(guestDTO) {
          successCallback(Guest.createFromDTO(guestDTO));
        })
        .error(errorCallback);
    };
    /**
     * Add guest
     * @param Event event
     */
    this.add = function(event, guest, successCallback, errorCallback) {
      $http.post(Configuration.urls.guests.add.replace('{eventId}', event.id), guest)
        .success(function(guestDTO) {
          successCallback(Guest.createFromDTO(guestDTO));
        })
        .error(errorCallback);
    };

    /**
     * Edit guest
     * @param Event event
     */
    this.edit = function(event, guest, successCallback, errorCallback) {
      $http.post(Configuration.urls.guests.edit.replace('{eventId}', event.id).replace('{guestId}', guest.id), guest)
        .success(function(guestDTO) {
          successCallback(Guest.createFromDTO(guestDTO));
        })
        .error(errorCallback);
    };
	};

	return GuestRepository;
});

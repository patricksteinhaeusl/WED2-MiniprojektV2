define(['app/model/event'], function(Event) {
	'use strict';

	var EventRepository = function($http, Configuration) {
		/**
		 * Get all events
		 *
		 * @return Event[]
		 */
		this.all = function(successCallback, errorCallback) {
			$http.get(Configuration.urls.events.all)
				.success(function(data) {
					// map applys a function on every element in the array and returns the result as new array
					var events = data.events.map(function(eventDTO) {
						return Event.createFromDTO(eventDTO);
					});
					successCallback(events);
				})
				.error(errorCallback);
		};

		/**
		 * Find event by identifier
		 *
		 * @param string identifier
		 */
		this.get = function(event, successCallback, errorCallback) {
      if(event) {
        $http.get(Configuration.urls.events.byId.replace('{eventId}', event.id))
          .success(function(eventDTO) {
              successCallback(Event.createFromDTO(eventDTO));
          })
          .error(errorCallback);
      } else {
        return null;
      }
		};

		/**
		 * Add event
		 * @param Event event
		 */
		this.add = function(event, successCallback, errorCallback) {
			$http.post(Configuration.urls.events.add, event)
				.success(function(eventDTO) {
					successCallback(Event.createFromDTO(eventDTO));
				})
				.error(errorCallback);
		};

    /**
     * Edit event
     * @param Event event
     */
    this.edit = function(event, successCallback, errorCallback) {
      $http.post(Configuration.urls.events.edit.replace('{eventId}', event.id), event)
        .success(function(eventDTO) {
          successCallback(Event.createFromDTO(eventDTO));
        })
        .error(errorCallback);
    };
	};

	return EventRepository;
});

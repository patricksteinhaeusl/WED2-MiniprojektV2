define(['frameworks/angular', 'app/configuration', 'app/controllers/event/listController', 'app/controllers/event/detailController', 'app/controllers/event/addController', 'app/controllers/event/editController', 'app/controllers/guest/addController', 'app/controllers/guest/editController', 'app/repository/eventRepository', 'app/repository/guestRepository', 'libraries/angularRoute'],
	function (Angular, Configuration, EventListController, EventDetailController, AddEventController, EditEventController, AddGuestController, EditGuestController, EventRepository, GuestRepository) {
	'use strict';

	/* modules */
	var Lafete = Angular.module('lafete',['ngRoute']);

  Lafete.value('Configuration', Configuration);

	/* services */
	EventRepository.$inject = ['$http', 'Configuration'];
	Lafete.service('EventRepository', EventRepository);
  GuestRepository.$inject = ['$http', 'Configuration'];
  Lafete.service('GuestRepository', GuestRepository);

	/* controllers */
	EventListController.$inject = ['$scope', '$location', 'EventRepository'];
	Lafete.controller('EventListController', EventListController);

	EventDetailController.$inject = ['$scope', '$routeParams', 'EventRepository'];
	Lafete.controller('EventDetailController', EventDetailController);

	AddEventController.$inject = ['$scope', '$location', 'EventRepository'];
	Lafete.controller('AddEventController', AddEventController);

  EditEventController.$inject = ['$scope', '$routeParams', '$location', 'EventRepository'];
  Lafete.controller('EditEventController', EditEventController);


  AddGuestController.$inject = ['$scope', '$routeParams', '$location', 'GuestRepository'];
  Lafete.controller('AddGuestController', AddGuestController);

  EditGuestController.$inject = ['$scope', '$routeParams', '$location', 'GuestRepository'];
  Lafete.controller('EditGuestController', EditGuestController);

	/* routes */
	Lafete.config(function($routeProvider) {
		$routeProvider
    .when('/list', {
			controller: 'EventListController',
			templateUrl: '/views/event/list.html'
		})
		.when('/events/add', {
			controller: 'AddEventController',
			templateUrl: '/views/event/add.html'
		})
		.when('/events/:eventId', {
			controller: 'EventDetailController',
			templateUrl: '/views/event/detail.html'
		})
    .when('/events/:eventId/edit', {
      controller: 'EditEventController',
      templateUrl: '/views/event/edit.html'
    })
    .when('/events/:eventId/guests/add', {
      controller: 'AddGuestController',
      templateUrl: '/views/guest/add.html'
    })
    .when('/events/:eventId/guests/:guestId', {
        controller: 'EditGuestController',
        templateUrl: '/views/guest/edit.html'
    })
		.otherwise({
			redirectTo: '/list'
		});
	});

	return Lafete;
});

define(['tests/factories/eventFactory', 'app/model/event', 'app/repository/eventRepository', 'tests/factories/guestFactory', 'app/model/guest', 'app/repository/guestRepository', 'libraries/angularMocks', 'app/configuration'],
	function (EventFactory, Event, EventRepository, GuestFactory, Guest, GuestRepository, AngularMocks, Configuration) {
	'use strict';

	describe('GuestRepository', function() {
    var event, eventRepository, guest, guestRepository, $http, $httpBackend;

    // setup
    beforeEach(AngularMocks.inject(function ($injector) {
      $http = $injector.get('$http');
      $httpBackend = $injector.get('$httpBackend');

      eventRepository = new EventRepository($http, Configuration);
      event = EventFactory.createEvent();

      guestRepository = new GuestRepository($http, Configuration);
      guest = GuestFactory.createGuest();

      $httpBackend.when('GET', '/api/events/1').respond({
        id: 1, name: 'Event', guests: [{id: 1, name: 'Hans Muster', contribution: 'Kuchen', comment: 'Ich habe Hunger.'}, {id: 2, name: 'Hans Muster', contribution: 'Kuchen', comment: 'Ich habe Hunger.'}]
      });

      $httpBackend.when('GET', '/api/events/1/guests').respond({
        guests: [{id: 1, name: 'Hans Muster', contribution: 'Kuchen', comment: 'Ich habe Hunger.'}, {id: 2, name: 'Hans Muster', contribution: 'Kuchen', comment: 'Ich habe Hunger.'}]
      });

      $httpBackend.when('POST', '/api/events').respond({
        id: 1, name: 'Event'
      });

      $httpBackend.when('GET', '/api/events/1/guests/1').respond({
        id: 1, name: 'Hans Muster', contribution: 'Kuchen', comment: 'Ich habe Hunger.'
      });

      $httpBackend.when('GET', '/api/events/1/guests').respond({
        guests: [{id: 1, name: 'Hans Muster', contribution: 'Kuchen', comment: 'Ich habe Hunger.'}, {id: 2, name: 'Hans Muster', contribution: 'Kuchen', comment: 'Ich habe Hunger.'}]
      });

      $httpBackend.when('POST', '/api/events/1/guests').respond({
        id: 1, name: 'Hans Muster', contribution: 'Kuchen', comment: 'Ich habe Hunger.'
      });
    }));

    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    describe('add()', function() {
      it('inserts guest', function() {
        var status = false;
        var returnedEvent;
        eventRepository.add(event, function (e) {returnedEvent = e; status = true}, function(){});

        $httpBackend.flush();

        var status = false;
        guestRepository.add(returnedEvent, guest, function () {status = true}, function(){});

        $httpBackend.flush();

        expect(status).toBe(true);
      });

      it('inserts an other guest', function() {
        var status = false;
        var returnedEvent;
        eventRepository.add(event, function (e) {returnedEvent = e; status = true}, function(){});

        $httpBackend.flush();

        var status = false;
        guestRepository.add(returnedEvent, guest, function () {status = true}, function(){});

        $httpBackend.flush();

        expect(status).toBe(true);
      });

      it('inserts an other guest', function() {
        var status = false;
        var returnedEvent;
        eventRepository.add(event, function (e) {returnedEvent = e; status = true}, function(){});

        $httpBackend.flush();

        var status = false;
        guestRepository.add(returnedEvent, guest, function () {status = true}, function(){});

        $httpBackend.flush();

        expect(status).toBe(true);
      });
    });
  });
});

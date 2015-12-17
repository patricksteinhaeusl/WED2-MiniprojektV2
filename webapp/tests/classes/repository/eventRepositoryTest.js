define(['tests/factories/eventFactory', 'app/model/event', 'app/repository/eventRepository', 'libraries/angularMocks', 'app/configuration'],
	function (EventFactory, Event, EventRepository, AngularMocks, Configuration) {
	'use strict';

	describe('EventRepository', function() {
		var event, eventRepository, $http, $httpBackend;

		// setup
		beforeEach(AngularMocks.inject(function($injector) {
			$http = $injector.get('$http');
			$httpBackend = $injector.get('$httpBackend');

			eventRepository = new EventRepository($http, Configuration);
			event = EventFactory.createEvent();

      $httpBackend.when('GET', '/api/events').respond({
        events: [{id: 1, name: 'Party'},{id: 2, name: 'Concert'}]
      });

      $httpBackend.when('GET', '/api/events/1').respond({
        id: 1, name: 'Party'
      });

      $httpBackend.when('POST', '/api/events').respond({
        id: 1, name: 'Simons birthday'
      });

      $httpBackend.when('POST', '/api/events/1').respond({
        id: 1, name: 'HSR Party'
      });

		}));

		afterEach(function() {
			$httpBackend.verifyNoOutstandingExpectation();
			$httpBackend.verifyNoOutstandingRequest();
		});

    describe('all()', function() {
      it('returns an Array', function () {
        $httpBackend.expectGET('/api/events');
        var events = null;
        eventRepository.all(function (eventList) {
          events = eventList;
        }, function () {
        });
        $httpBackend.flush();
        expect(events).toEqual(jasmine.any(Array));
      });

      it('returns two events', function() {
        $httpBackend.expectGET('/api/events');
        var events = null;
        eventRepository.all(function(eventList) {
          events = eventList;
        },function () {});
        $httpBackend.flush();
        expect(events.length).toEqual(2);
      });

      it('returns real javascript objects', function() {
        $httpBackend.expectGET('/api/events');
        var events = null;
        eventRepository.all(function(eventList) {
          events = eventList;
        }, function(){});
        $httpBackend.flush();
        expect(events[0]).toEqual(jasmine.any(Event));
        expect(events[1]).toEqual(jasmine.any(Event));
      });
    });

    describe('add()', function() {
      it('inserts event', function() {
        var returnedEvent;

        var status = false;
        $httpBackend.expectPOST('/api/events', event);

        eventRepository.add(event, function (e) {returnedEvent = e; status = true}, function(){});

        $httpBackend.flush();
        expect(status).toBe(true);
        expect(returnedEvent).toEqual(jasmine.any(Event));
        expect(returnedEvent.name).toEqual(event.name);
      });
    });

    describe('get()', function() {
      describe('by existing object id', function() {
        it('returns event', function() {
          var returnedEvent;
          var event = { id: 1 };

          eventRepository.get(event,function(e){
            returnedEvent = e;
          }, function(){});

          $httpBackend.flush();

          expect(returnedEvent).toEqual(jasmine.any(Event));
          expect(returnedEvent.id).toEqual(event.id);
        });

        describe('by inexistent object id', function() {
          it('returns null', function() {
            expect(eventRepository.get(null, function () {}, function(){})).toEqual(null);
          });

          it('returns null', function() {
            expect(eventRepository.get(undefined, function () {}, function(){})).toEqual(null);
          });
        });
      });
    });

    describe('update()', function() {
      it('updates event', function() {
        var returnedEvent;
        var event = new Event();
        event.id = 1;

        $httpBackend.expectPOST('/api/events/1', event);

        eventRepository.edit(event, function(e){
          returnedEvent = e;
        }, function(){});

        $httpBackend.flush();
        expect(returnedEvent.id).toEqual(event.id);
      });
    });
  });
});

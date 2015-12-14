define(['tests/factories/guestFactory','app/model/guest'],
	function(GuestFactory, Guest) {
	'use strict';

	describe('Guest', function() {
		var guest;

		// setup
		beforeEach(function() {
			guest = GuestFactory.createGuest();
 		});

		describe('property id', function() {
			it('is a UUID', function() {
				var uuidRegex = new RegExp('[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}');
				expect(guest.id).toMatch(uuidRegex);

				var guestPredefinedId = GuestFactory.createGuest('76ba7b42-0534-4d1f-9c0c-5b07488b0c2c');
				expect(guestPredefinedId.id).toBe('76ba7b42-0534-4d1f-9c0c-5b07488b0c2c');
			});
		});
	});
});

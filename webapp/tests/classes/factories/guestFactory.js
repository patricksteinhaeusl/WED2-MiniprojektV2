define(['app/model/guest'], function (Guest) {
	'use strict';

	var GuestFactory = {
		createGuest: function(identifier) {
			return new Guest(
				'Hans Muster',
				'Kuchen',
				'Ich bringe Kuchen',
				'false',
				identifier
			);
		}
	};

	return GuestFactory;
});

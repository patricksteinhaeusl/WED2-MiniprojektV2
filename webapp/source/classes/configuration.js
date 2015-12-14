define([], function(){
  return {
    urls: {
      events: {
        all: '/api/events',
        byId: '/api/events/{eventId}',
        add: '/api/events',
        edit: '/api/events/{eventId}'
      },
      guests: {
        byId: '/api/events/{eventId}/guests/{guestId}',
        add: '/api/events/{eventId}/guests',
        edit: '/api/events/{eventId}/guests/{guestId}'
      }
    }
  };
});
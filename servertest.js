var http = require('http');


var postOptions = {
	host: 'localhost',
	port: '8080',
	path: '/api/events',
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	}
};


var postRequest = http.request(postOptions, function(response) {
	response.setEncoding('utf8');
	response.on('data', function (chunk) {
		console.log('Response: ' + chunk);
	});
});

// post the data
var data = {"name":"The Party","description":"Party an der Oberen Bahnhofstrasse","targetGroup":"Private Mitglieder","contributionsDescription":"Pizza","location":{"name":"The House","street":"Obere Bahnhofstrasse","zipCode":8640,"city":"Rapperswil"}};
postRequest.write(JSON.stringify(data));
postRequest.end();


var postOptions = {
	host: 'localhost',
	port: '8080',
	path: '/api/events/2/guests',
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	}
};

var postRequest = http.request(postOptions, function(response) {
	response.setEncoding('utf8');
	response.on('data', function (chunk) {
		console.log('Response: ' + chunk);
	});
});

// post the data
var guest = {"name":"Rudolf","contribution":"","comment":"Ich habe hunger"};
postRequest.write(JSON.stringify(guest));
postRequest.end();


var postOptions = {
	host: 'localhost',
	port: '8080',
	path: '/api/events/3',
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	}
};
var postRequest = http.request(postOptions, function(response) {
	response.setEncoding('utf8');
	response.on('data', function (chunk) {
		console.log('Response: ' + chunk);
	});
});

// post the data
var data = {"targetGroup": "Private Mitglieder und andere", "contributionsDescription": "Pizza oder andere Desserts"}
postRequest.write(JSON.stringify(data));
postRequest.end();


var postOptions = {
	host: 'localhost',
	port: '8080',
	path: '/api/events/2/guests/4',
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	}
};

var postRequest = http.request(postOptions, function(response) {
	response.setEncoding('utf8');
	response.on('data', function (chunk) {
		console.log('Response: ' + chunk);
	});
});

// post the data
var guestUpdateData = {"contribution":"Salami Pizza"};
postRequest.write(JSON.stringify(guestUpdateData));
postRequest.end();


var postOptions = {
	host: 'localhost',
	port: '8080',
	path: '/api/events/2/guests/4',
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	}
};

var postRequest = http.request(postOptions, function(response) {
	response.setEncoding('utf8');
	response.on('data', function (chunk) {
		console.log('Response: ' + chunk);
	});
});

// post the data
var guest = {canceled: true};
postRequest.write(JSON.stringify(guest));
postRequest.end();

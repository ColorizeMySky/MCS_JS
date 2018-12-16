const form = document.forms[0];

form.onsubmit = function(degree) {
	degree.preventDefault();
	getWeather();
}

function getWeather() {
	var APIKey = '***';
	var city = form.elements.city.value;
	var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + APIKey + '&units=metric';

	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, false);
	xhr.send();

	if (xhr.status != 200) {
		document.querySelector('.result').innerHTML = '<p>' + xhr.status + ', ' + xhr.statusText + '</p>';
	}
	else {
		var weather = JSON.parse(xhr.response);

		document.querySelector('#temp').innerHTML = 'The temp in ' + city + ' is: ' + weather.main.temp + '&#8451;';
		document.querySelector('#wind').innerHTML = 'The wind speed in ' + city + ' is: ' + weather.wind.speed + ' meter/sec';
	}	
}

let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=b98e3357e7b0e7fd3abe8eb2da2f7ea8';
weatherRequest.open('Get',apiURLstring, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById('value1').innerHTML = weatherData.weather[0].description;
    document.getElementById('temperaturevalue').innerHTML = weatherData.main.temp.toFixed(0);
    document.getElementById('humidity').innerHTML = weatherData.main.humidity;
    document.getElementById('windSpeedvalue').innerHTML = weatherData.wind.speed.toFixed(0);

    

}



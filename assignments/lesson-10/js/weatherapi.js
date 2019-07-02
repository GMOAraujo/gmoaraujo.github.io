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

    document.getElementById('temperaturevalue').innerHTML = weatherData.main.temp.toFixed(0);

    let temperature = weatherData.main.temp;
    let windSpeed =  innerHTML = weatherData.wind.speed;


    let result = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed,0.16) + 0.4275 * temperature * Math.pow(windSpeed,0.16);
    document.getElementById('output').innerHTML = result.toFixed(0);


    }

    let fivedayRequest = new XMLHttpRequest();
    let fivedayURLstring = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=b98e3357e7b0e7fd3abe8eb2da2f7ea8';
    fivedayRequest.open('Get',fivedayURLstring, true);
    fivedayRequest.send();
    
    fivedayRequest.onload =  function () {
        let weatherData = JSON.parse(fivedayRequest.responseText);
        console.log(weatherData);

        

        document.getElementById('Wed').innerHTML = weatherData.list[5].main.temp.toFixed(0);
        document.getElementById('Thu').innerHTML = weatherData.list[5].main.temp.toFixed(0);
        document.getElementById('Fri').innerHTML = weatherData.list[5].main.temp.toFixed(0);


        const iconcode = weatherData.list[4].weather[0].icon;        

        const icon = '//openweathermap.org/img/w/'+ iconcode +'png';
        console.log(icon);
        document.getElementById('weather_icon').src = icon;



    }
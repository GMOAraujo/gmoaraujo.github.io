let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=b98e3357e7b0e7fd3abe8eb2da2f7ea8';
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

   //Five days Forecast for Preston.

   let fivedayRequest = new XMLHttpRequest();
   let fivedayURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=b98e3357e7b0e7fd3abe8eb2da2f7ea8';
   fivedayRequest.open('Get',fivedayURLstring, true);
   fivedayRequest.send();



   fivedayRequest.onload = function() {
       let fiveday = JSON.parse(fivedayRequest.responseText);
       // Populate the 5 day forecast
       fivedayDisplay(fiveday);
   
   }

       //Forecast Display Function
   function fivedayDisplay(fiveday) {
       console.log(fiveday);


        // go through the list of forecast values looking for 18:00 (6:00 p.m.) records and record index
   let daytemp = [];
   let month = [];
   let date = [];
   let icon = [];
   let day = 0;
   fiveday.list.forEach(x => {
       if (x.dt_txt.includes('18:00:00')) {
           daytemp[day] = Math.round(x.main.temp);
           month[day] = x.dt_txt.substring(5,7);
           date[day] = x.dt_txt.substring(8, 10);
           icon[day] = x.weather[0].icon;
           console.log(day, daytemp[day], month[day], date[day], icon[day]);
           day++;

       }
   });

   var Months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];

   // Populate the Header for the Forecast Table
   document.getElementById('MonDay').innerHTML = Months[month[0] - 1] + " " + date[0];
   document.getElementById('TueDay').innerHTML = Months[month[0] - 1] + " " + date[1];
   document.getElementById('WedDay').innerHTML = Months[month[0] - 1] + " " + date[2];
   document.getElementById('ThuDay').innerHTML = Months[month[0] - 1] + " " + date[3];
   document.getElementById('FriDay').innerHTML = Months[month[0] - 1] + " " + date[4];

   // Populate the weather forecast icon
   var basepath = "http://openweathermap.org/img/wn/";

   document.getElementById('weatherIcon1').src = basepath + icon[0] + ".png";
   document.getElementById('weatherIcon2').src = basepath + icon[1] + ".png";
   document.getElementById('weatherIcon3').src = basepath + icon[2] + ".png";
   document.getElementById('weatherIcon4').src = basepath + icon[3] + ".png";
   document.getElementById('weatherIcon5').src = basepath + icon[4] + ".png";

   // Populate the high temperature forecast for the day
   document.getElementById('MonTemp').innerHTML = daytemp[0];
   document.getElementById('TueTemp').innerHTML = daytemp[1];
   document.getElementById('WedTemp').innerHTML = daytemp[2];
   document.getElementById('ThuTemp').innerHTML = daytemp[3];
   document.getElementById('FriTemp').innerHTML = daytemp[4];
} // End of Forecast Display //end of Forecast Display Function
   





    
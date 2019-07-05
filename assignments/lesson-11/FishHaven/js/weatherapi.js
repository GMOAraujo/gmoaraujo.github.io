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

    let fivedayRequest = new XMLHttpRequest();
    let fivedayURLstring = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=b98e3357e7b0e7fd3abe8eb2da2f7ea8';
    fivedayRequest.open('Get',fivedayURLstring, true);
    fivedayRequest.send();
    
    fivedayRequest.onload =  function () {
    
        let fiveday = JSON.parse(fivedayRequest.responseText);
        console.log(fiveday);
               
    
             for  (i = 0; i < 5; ++i) {
           // document.getElementById('WedDay').innerHTML = fiveday.list[4].dt_txt;
            time = fiveday.list[i].dt_txt;
           // if (time.includes('18:00:00')) {

                var date = new Date (fiveday.list[i].dt_txt * 1000);
                var days = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday", "Saturday" ];
                var months = ["January", "February", "March", "April", "May", "June","July", "August","September", "October", "November", "December"];
                var findDate = days[i] + "<br>" + months[i] + " " + date;

                
                document.getElementById('WedDay').innerHTML = fiveday.list[4].dt_txt;

               

                var fiveTemp= fivedayRequest.list[i].main.temp;
                fiveTemp= Math.round(fiveTemp);
                fiveDaystemp.push(fiveTemp);

                var iconcode = fivedayRequest.list[i].weather[4].icon;
                var icon_path = "https://openweathermap.org/img/wn/" + iconcode + ".png";
                fiveDaysicons.push(icon_path);

                //Days
                var day = days[0];
                document.getElementById('WedDay').setAttribute('src',  weatherData.list.length);
            
           // }
            
          
        }
        

    }



    
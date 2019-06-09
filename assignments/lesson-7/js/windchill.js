let temperature = parseInt(document.getElementById('temperaturevalue').innerHTML);
let windSpeed =  parseInt(document.getElementById('windSpeedvaluevalue').innerHTML);


let result = 35.74 + (0.6215 * temperature) - (35.75 * windSpeed^0.16) + (0.4275 * temperature * windSpeed^0.16);
document.getElementById('output').innerHTML = result.toFixed(0);

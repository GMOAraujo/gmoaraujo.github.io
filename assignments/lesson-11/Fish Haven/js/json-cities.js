var townindex, towns;
var section = document.querySelector('section.json-cities');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var townInfo = request.response;
    showTownsdata(townInfo);
}

    function showTownsdata(jsonObj) {
        towns = jsonObj['towns'];

        for (townindex = 0; townindex < towns.length; townindex++) {

            if (towns[townindex].name == 'Fish Haven')
                populateCityData(towns[townindex])
        }



    }

    function populateCityData(jsonObj) {

        var city = jsonObj;

        var myUl = document.createElement('ul');
        var myList1 = document.createElement('li');
        var myList2 = document.createElement('li');
        var myList3 = document.createElement('li');
        

        myList1.textContent = city.events[0];
        myList2.textContent = city.events[1];
        myList3.textContent = city.events[2]
        
        
      
       




        myUl.appendChild(myList1);
        myUl.appendChild(myList2);
        myUl.appendChild(myList3);
    
       
       
        section.appendChild(myUl);
    }

  
var townindex, towns;
var section = document.querySelector('section');
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

            if (towns[townindex].name == 'Preston')
                populateCityData(towns[townindex])
        }


        for (townindex = 0; townindex < towns.length; townindex++) {

            if (towns[townindex].name == 'Soda Springs')
                populateCityData(towns[townindex])
        }



        for (townindex = 0; townindex < towns.length; townindex++) {

            if (towns[townindex].name == 'Fish Haven')
                populateCityData(towns[townindex])
        }



    }

    function populateCityData(jsonObj) {

        var city = jsonObj;

        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myH3 = document.createElement('h3');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myImage = document.createElement('img');

        myH2.textContent = city.name;
        myH3.textContent = city.motto;
        myPara1.textContent = 'Year Founded:' + city.yearFounded;
        myPara2.textContent = 'Population:' + city.currentPopulation;
        myPara3.textContent = 'Average Rainfall:' + city.averageRainfall;
        myImage.textContent = ('class','townImage');




        switch (myH2.textContent) {

        case "Preston":
            myImage.src = "images/prestoncity.jpg";
            break;

        case "Soda Springs":
            myImage.src = "images/sodaspringscity.jpg";
            break;

        case "Fish Haven":
            myImage.src = "images/fishhavencity.jpg";
            break;
        }
    


        myArticle.appendChild(myH2);
        myArticle.appendChild(myH3);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myImage);

        section.appendChild(myArticle);
    }


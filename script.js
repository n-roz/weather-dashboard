// api key 37ca395d783a15ec329da91c4fd43c95
// 'http://api.openweathermap.org/geo/1.0/direct?q='+inputValue.value+'&limit=5&appid=37ca395d783a15ec329da91c4fd43c95'

// start js first draft
//var button = document.querySelector('.button')
// var input = document.querySelector('.input_text')
// var main = document.querySelector('.name')
// var temp = document.querySelector('.temp')
// var humidity = document.querySelector('.humidity')
// var wind = document.querySelector('.wind')

// button.addEventListener('click',function(){
// fetch('http://api.openweathermap.org/geo/1.0/direct?q='+input.value+'&limit=5&appid=37ca395d783a15ec329da91c4fd43c95')
//     .then(response => response.json())
//     .then(data => {
//         var tempValue = data['main']['temp'];
//         var nameValue = data['name'];
//     }

// .catch(err => alert("Invalid entry"))
// })

// start js second draft
function addResult(){
    inputCity = document.getElementById("myInput").value;  
    historyList = getInfo();
    var searchCity = $("<div>") 
    searchCity.attr('id',inputCity) 
    searchCity.text(inputCity) 
    searchCity.addClass("h3")
    if (historyList.includes(inputCity) === false){
        $(".history").append(searchCity)
    }
    $(".subtitle").attr("style","display:inline")
    addInfo(inputCity);
}; 

// event listener
$(".history").on('click', function(event){
    // prevent page from refreshing
    event.preventDefault();
    $(".subtitle").attr("style", "display:inline")
     document.getElementById("myInput").value = event.target.id;
    getResult(); 
});

// event listener
document.getElementById("searchBtn").addEventListener("click", addResult);
document.getElementById("searchBtn").addEventListener('click', getResult);

// function to get current weather and convert lat and lon to city
function getResult(){   

    $(".five-day").empty();
    $(".city").empty()

   inputCity = document.getElementById("myInput").value;   
    var countryCode = 'US';
    var cityCode = inputCity;
    var geoLon;   
    var geoLat;

// getting the variables i need
    var cityName = $("<h4>")    
    cityName.addClass("h5") 
    var dateTime = $("<div>") 
    var icon = $("<img>")
    icon.addClass("icon")
    var temp = $("<div>")    
    var wind = $("<div>")    
    var humidity = $("<div>");
  
// append
    $(".city").addClass("list-group")
    $(".city").append(cityName)    
    $(".city").append(dateTime)    
    $(".city").append(icon)    
    $(".city").append(temp)    
    $(".city").append(wind)    
    $(".city").append(humidity)
    
// first api call
    var geoUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + cityCode + '&limit=5&appid=37ca395d783a15ec329da91c4fd43c95'

    fetch(geoUrl)
    .then(function (response){
      return response.json();
    })
    .then(function (data){
      geoLon = data[0].lon;
      geoLat = data[0].lat;

 // convert lat and lon to city
      var weatherUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + geoLat + '&lon='+ geoLon + '&exclude=minutely,hourly,alerts&units=imperial&appid=37ca395d783a15ec329da91c4fd43c95';
        
      fetch(weatherUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        weatherIcon = data.current.weather[0].icon;
        imgSrc = 'https://openweathermap.org/img/wn/' + weatherIcon + '.png';
        icon.attr('src', imgSrc)

        cityName.text(cityCode);

        // date from openweathermap api
        var date = new Date(data.current.dt * 1000);
        dateTime.text("("+ (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear() + ")");

        // weather variables text
        temp.text("Temp: " + data.current.temp + "F");
        humidity.text("Humidity: " data.current.humidity + "%");
        wind.text("Wind Speed: " + data.current.wind_speed + "MPH");

        // 5-day forecast
        for (var i=1; i<6; i++) {
            var container = $("<div>")
            this["futureDate"+i] = $("<h>")
            this["futureIcon"+i] = $("<img>")
            this["futureTemp"+i] = $("<div>")
            this["futureHumidity"+i] = $("<div>")
            this["futureWind"+i] = $("<div>")

            //date
            this["forecastDay"+i] = new Date(data.daily[i].dt * 1000);
            
            // weather variables forecast
            (this["futureDate"+i]).text(((this["forecastDay"+i]).getMonth()+i) + "/" + (this["firecastDay"+i]).getDate() + "/" + (this["forecastDay"+i]).getFullYear());
            (this["futureTemp"=i]).text("Temp: " + data.daily[i].temp.day + "F");
            (this["futureHumidity"=i]).text("Humidity: " + data.daily[i].temp.day + "%");
            (this["futureWind"=i]).text("Wind Speed: " + data.daily[i].wind_speed.day + "MPH");
            (this["weatherIcon"+i])= data.daily[i].weather[0].icon;
            //append
            $(".five-day").append(container)
            container.append((this["futureDate"+i]));
            container.append((this["futureIcon"+i]));
            container.append((this["futureTemp"+i]));
            container.append((this["futureWind"+i]));
            container.append((this["futureHumidity"+i]));
            container.addClass("forecast-card")
        }

// local storage
function getInfo() {
    var currentList = localStorage.getItem("city");
    if (currentList !== null) {
        newList= JSON.parse(currentList);
        return newList;
    } else {
        newList = [];
    }
    return newList;
}

//render
function renderInfo () {
    var historyList = getInfo();
    for (var i=0;i<historyList.length;i++) {
        var inputCity = historyList[i];
        
    }
}
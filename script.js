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
    var searchCity =$("<div>") 
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
    event.preventDefault();
    $(".subtitle").attr("style", "display:inline")
     document.getElementById("myInput").value = event.target.id;
    getResult(); 
});

// event listener
document.getElementById("searchBtn").addEventListener("click", addResult);
document.getElementById("searchBtn").addEventListener('click', getResult);

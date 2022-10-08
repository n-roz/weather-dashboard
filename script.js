// api key 37ca395d783a15ec329da91c4fd43c95
// 'http://api.openweathermap.org/geo/1.0/direct?q='+inputValue.value+'&limit=5&appid=37ca395d783a15ec329da91c4fd43c95'

//var button = document.querySelector('.button')
var input = document.querySelector('.input_text')
var main = document.querySelector('.name')
var temp = document.querySelector('.temp')
var humidity = document.querySelector('.humidity')
var wind = document.querySelector('.wind')

button.addEventListener('click',function(){
fetch('http://api.openweathermap.org/geo/1.0/direct?q='+input.value+'&limit=5&appid=37ca395d783a15ec329da91c4fd43c95')
    .then(response => response.json())
    .then(data => {
        var tempValue = data['main']['temp'];
        var nameValue = data['name'];
    }

.catch(err => alert("Invalid entry"))
})
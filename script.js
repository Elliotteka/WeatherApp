let weather = {
    "apiKey":"cad0ab2dc97747e51fabeeafbe30c14b",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        +"&units=metric&appid=" 
        + this.apiKey
        )
    .then((Response) => Response.json())
    .then((data) => this.displayWeather(data))
},

/* This function displays all the data requested from API */
displayWeather: function(data) {
const{ name } = data;
const{ icon, description } = data.weather[0];
const{ temp, humidity } = data.main;
const{ speed } = data.wind;
/* console.log(name, icon, description, temp, humidity, speed) */
document.querySelector(".city").innerText = "Weather in " + name;
document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon + "@2x.png"; /* this line changes the icon associated with the weather (the 2x makes the icon bigger) */
document.querySelector(".description").innerText = description;
document.querySelector(".temp").innerText = temp + "°C";
document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
document.querySelector(".wind").innerText = "Wind speed: " + speed + "km";
document.querySelector(".weather").classList.remove("loading");
document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ name +"')"/* This line fetches the background image associated with the countrys weather*/
},
search: function(){
    this.fetchWeather(document.querySelector(".searchbar").value);
},
}

/* This automatically get the content of the search bar and search for it */
document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
});

document.querySelector(".searchbar").addEventListener("keyup", function(event) {
    if (event.key == "Enter"){
        weather.search();
    } 
});

weather.fetchWeather("London");


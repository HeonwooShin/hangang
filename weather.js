const hanRiverCoords = {lat:37.511559136449065, lon:126.9745030706592}

const tempDisplayer = document.querySelector('.temperature');

function displayWeather(weatherObj) {
    tempDisplayer.innerHTML = `${(0.7*weatherObj.main.temp + 5).toFixed(1)}°C`
}

function getWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${hanRiverCoords.lat}&lon=${hanRiverCoords.lon}&units=metric&appid=ae99c98743d9955d58bb2f72ea6def84`)
        .then(response => response.json())
        .then(weatherObj => displayWeather(weatherObj));
}

getWeather();

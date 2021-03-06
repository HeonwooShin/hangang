const hanRiverCoords = {lat:37.511559136449065, lon:126.9745030706592}

const tempDisplayer = document.querySelector('.temperature');

function getUnixTime() {
    unixTime = Math.floor(Date.now()/1000);
    return unixTime;
}

function displayWeather(weatherObj) {
    tempDisplayer.innerHTML = `${(0.7*weatherObj.current.temp + 5).toFixed(1)}°C`;//한강 수온 예측 공식
}

function getWeather() {//두 시간 전 날씨 오브젝트 가져오기
    fetch(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${hanRiverCoords.lat}&lon=${hanRiverCoords.lon}&dt=${getUnixTime()-7200}&units=metric&appid=ae99c98743d9955d58bb2f72ea6def84`)
    .then(response => response.json())
    .then(weatherObj => displayWeather(weatherObj));
}

getWeather();

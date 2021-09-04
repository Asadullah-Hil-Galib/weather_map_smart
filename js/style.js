const api = {
    key: '132116852d4d672c20f12ca541a8f8b3'
};

const inputFiled = document.querySelector('.input_filed');

inputFiled.addEventListener('keypress', setKeyQuery);

function setKeyQuery (evt){
    if (evt.keyCode == 13) {
        console.log(inputFiled.value);
        getCallApi(inputFiled.value)
        // Clear Input Filed
        inputFiled.value = '';
    }
}

const getCallApi = query => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${api.key}&units=metric`)
        .then(res => res.json())
        .then(data => resultDisplay(data));
    
}
const resultDisplay = (data) => {
    console.log(data);
    const temper = document.querySelector('.tempar');
    temper.innerText = Math.round(data.main.temp)
    const feels_like = document.querySelector('.feels_like');
    feels_like.innerText = Math.round(data.main.feels_like)
    const max_tempar = document.querySelector('.max_weather');
    max_tempar.innerText = Math.round(data.main.temp_max)
    const min_tempar = document.querySelector('.min_weather');
    min_tempar.innerText = Math.round(data.main.temp_min)
    const feels = document.querySelector('.feels');
    feels.innerText = data.weather[0].main;
    const imgUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    const weatherIcon = document.querySelector('.weather_icon');
    weatherIcon.src = imgUrl
    const cityName = document.querySelector('.city_name');
    cityName.innerText = data.name + ' ' + data.sys.country
}

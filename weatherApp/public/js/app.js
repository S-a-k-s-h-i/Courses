
const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const weatherIcon = document.querySelector('.weatherIcon i');
const temperature = document.querySelector('.temperature span');
const weatherCondition = document.querySelector('.weatherCondition')
const place = document.querySelector('.place');
const date = document.querySelector('.date');

const monthName = ["January","February","March","April","June","July","August","September","October","November","December"]

date.textContent = new Date().getDate() + ', '+monthName[new Date().getMonth()].substring(0,3);

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(search.value);
    place.textContent ="Loading....";
    temperature.textContent = "";
    weatherCondition.textContent="";
    fetch('http://localhost:5000/weather?address='+search.value)
    .then(response => response.json())
    .then(jsondata =>{
        if(jsondata.error){
            console.log(jsondata)
            place.textContent =jsondata.error;
            temperature.textContent = "";
            weatherCondition.textContent="";
        }
        else{
            if(jsondata.description ==="rain" || jsondata.description ==="fog"){
                weatherIcon.className="wi wi-day-"+jsondata.description
            }else{
                weatherIcon.className="wi wi-day-cloudy"
            }
            place.textContent =jsondata.cityName;
            temperature.textContent =(jsondata.temperature - 273.5).toFixed(2) +String.fromCharCode(176);
            weatherCondition.textContent=jsondata.description.toUpperCase();
        }
    })
})
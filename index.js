const API_KEY = 'bd07f2c9a75f0c0307b967edf3525671';
const results = document.querySelector('.results');
const loader = document.querySelector('.loader');
const content = document.querySelector('.weather-content');


async function searchCity(){
  const city = document.getElementById('city-input').value;
  const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=3&appid=${API_KEY}`);
  const data = await response.json();
  const cities = [];
  console.log(response);

  if(!data || data.length == 0){
    document.querySelector('.city-results').innerHTML = '<p class="city-item">No results found</p>'
  }else{
    data.forEach(city => {
      cities.push(`<li class='city-item' onClick='checkWeather(event)'>${city.name}, ${city.country}</li>`);
      document.querySelector('.city-results').innerHTML = cities.join('');
    });
  }
  results.style.display = 'block';
}

async function checkWeather(e){
  const city = document.getElementById('city-input').value === '' ? 'new york' :  e.target.innerHTML;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
  const data = await response.json();
  const weatherIconValue = data.weather[0].main;

  document.querySelector('.weather-icon').setAttribute('src', `public/images/${weatherIconValue.toLowerCase()}.png`);
  document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
  document.querySelector('.city').innerHTML = city;
  document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
  document.querySelector('.wind').innerHTML = data.wind.speed + ' m/s';
  results.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", async () => {
  await checkWeather();
  loader.classList.add('hidden');
  content.classList.remove('hidden');
});

document.getElementById('search-btn').addEventListener('click', searchCity);
document.getElementById('city-input').addEventListener('keydown', (event) => event.key === 'Enter' && searchCity());
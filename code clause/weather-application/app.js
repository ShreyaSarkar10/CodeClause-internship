const apiKey = '87e9b6412cda92ba8637b8302f54c2ae';
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const weatherInfo = document.getElementById('weather-info');

searchBtn.addEventListener('click', () => {
  const city = cityInput.value;
  if (city) {
    getWeatherData(city);
  } else {
    weatherInfo.textContent = 'Please enter a city.';
  }
});

async function getWeatherData(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    
    weatherInfo.innerHTML = `
      <h2>${city}</h2>
      <p>${description}</p>
      <p>${temperature}°C</p>
    `;
  } catch (error) {
    weatherInfo.textContent = 'City not found.';
  }
}
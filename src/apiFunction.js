import WeatherAPIKEY from '/src/key.js';
import { domElements } from '/src/domEl.js';

const key = new WeatherAPIKEY;

export default async function getWeather(location) {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${key.getKey()}&q=${location}&days=3`, {mode: 'cors'})
    const data = await response.json();
    domElements().$city.textContent = data.location.name;
    domElements().$country.textContent = data.location.country;
    domElements().$weatherImg.src = data.current.condition.icon;
    domElements().$condition.textContent = data.current.condition.text;
    domElements().$tempFahrenheit.innerHTML = data.current.temp_f.toFixed(0) +  ' &deg;F';
    domElements().$tempCelsius.innerHTML = data.current.temp_c.toFixed(0) + ' &deg;C';
    domElements().$tempFeelsFahrenheit.innerHTML = data.current.feelslike_f.toFixed(0) +  ' &deg;F';
    domElements().$tempFeelsCelsius.innerHTML = data.current.feelslike_c.toFixed(0) + ' &deg;C';
    domElements().$dayOneTemp.innerHTML = data.forecast.forecastday[0].day.maxtemp_f.toFixed(0) + ' &deg;F <br>' + data.forecast.forecastday[0].day.maxtemp_c.toFixed(0) + ' &deg;C';
    domElements().$dayOneImage.src = data.forecast.forecastday[0].day.condition.icon;
    domElements().$dayOneForecast.textContent = data.forecast.forecastday[0].day.condition.text;
    domElements().$dayTwoTemp.innerHTML = data.forecast.forecastday[1].day.maxtemp_f.toFixed(0) + ' &deg;F <br>' + data.forecast.forecastday[1].day.maxtemp_c.toFixed(0) + ' &deg;C';
    domElements().$dayTwoImage.src = data.forecast.forecastday[1].day.condition.icon;
    domElements().$dayTwoForecast.textContent = data.forecast.forecastday[1].day.condition.text;
    domElements().$dayThreeTemp.innerHTML = data.forecast.forecastday[2].day.maxtemp_f.toFixed(0) + ' &deg;F <br>' + data.forecast.forecastday[2].day.maxtemp_c.toFixed(0) + ' &deg;C';
    domElements().$dayThreeImage.src = data.forecast.forecastday[2].day.condition.icon;
    domElements().$dayThreeForecast.textContent = data.forecast.forecastday[2].day.condition.text;
  } catch {

  }
}
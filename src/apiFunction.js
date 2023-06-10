import WeatherAPIKEY from '/src/key.js';
import { domElements } from '/src/domEl.js';
import { Render } from '/src/render.js';

// API key
const key = new WeatherAPIKEY;

// Async function to get weather
export default async function getWeather(location) {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${key.getKey()}&q=${location}&days=3`, {mode: 'cors'})
    const data = await response.json();
    const render = new Render(data);
    render.display();
  } catch(error) {
    domElements().$logo.textContent = error
    domElements().$logo.style.display = 'block';
    domElements().$logo.style.fontSize = '2rem';
    domElements().$container.style.display = 'none';
  }
}
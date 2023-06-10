import { domElements } from '/src/domEl.js';

// render class to display information to the DOM
export class Render {
  constructor(data) {
    this.data = data;
  }
  display() {
    domElements().$city.textContent = this.data.location.name;
    domElements().$country.textContent = this.data.location.country;
    domElements().$weatherImg.src = this.data.current.condition.icon;
    domElements().$condition.textContent = this.data.current.condition.text;
    domElements().$tempFahrenheit.innerHTML = this.data.current.temp_f.toFixed(0) +  ' &deg;F';
    domElements().$tempCelsius.innerHTML = this.data.current.temp_c.toFixed(0) + ' &deg;C';
    domElements().$tempFeelsFahrenheit.innerHTML = this.data.current.feelslike_f.toFixed(0) +  ' &deg;F';
    domElements().$tempFeelsCelsius.innerHTML = this.data.current.feelslike_c.toFixed(0) + ' &deg;C';
    domElements().$dayOneTemp.innerHTML = this.data.forecast.forecastday[0].day.maxtemp_f.toFixed(0) + ' &deg;F <br>' + this.data.forecast.forecastday[0].day.maxtemp_c.toFixed(0) + ' &deg;C';
    domElements().$dayOneImage.src = this.data.forecast.forecastday[0].day.condition.icon;
    domElements().$dayOneForecast.textContent = this.data.forecast.forecastday[0].day.condition.text;
    domElements().$dayTwoTemp.innerHTML = this.data.forecast.forecastday[1].day.maxtemp_f.toFixed(0) + ' &deg;F <br>' + this.data.forecast.forecastday[1].day.maxtemp_c.toFixed(0) + ' &deg;C';
    domElements().$dayTwoImage.src = this.data.forecast.forecastday[1].day.condition.icon;
    domElements().$dayTwoForecast.textContent = this.data.forecast.forecastday[1].day.condition.text;
    domElements().$dayThreeTemp.innerHTML = this.data.forecast.forecastday[2].day.maxtemp_f.toFixed(0) + ' &deg;F <br>' + this.data.forecast.forecastday[2].day.maxtemp_c.toFixed(0) + ' &deg;C';
    domElements().$dayThreeImage.src = this.data.forecast.forecastday[2].day.condition.icon;
    domElements().$dayThreeForecast.textContent = this.data.forecast.forecastday[2].day.condition.text;
  }
}
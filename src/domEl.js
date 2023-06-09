// DOM elements

export function domElements() {
  return {
    $searchButton: document.querySelector('[data-submit]'),
    $form: document.querySelector('form'),
    $logo: document.querySelector('.logo'),
    $searchTerm: document.querySelector('[data-location]').value,
    $condition: document.querySelector('[data-weather-status]'),
    $city: document.querySelector('[data-weather-city]'),
    $country: document.querySelector('[data-weather-country]'),
    $weatherImg: document.querySelector('[data-image-source]'),
    $container: document.querySelector('[data-container]'),
    $tempFahrenheit: document.querySelector('[data-fahrenheit]'),
    $tempCelsius: document.querySelector('[data-celcius]'),
    $tempFeelsFahrenheit: document.querySelector('[data-feels-fahrenheit]'),
    $tempFeelsCelsius: document.querySelector('[data-feels-celcius]'),
    $dayOneTemp: document.querySelector('[data-day-one-temp]'),
    $dayOneImage: document.querySelector('[data-day-one-image'),
    $dayOneForecast: document.querySelector('[data-day-one]'),
    $dayTwoTemp: document.querySelector('[data-day-two-temp]'),
    $dayTwoImage: document.querySelector('[data-day-two-image]'),
    $dayTwoForecast: document.querySelector('[data-day-two]'),
    $dayThreeTemp: document.querySelector('[data-day-three-temp]'),
    $dayThreeImage: document.querySelector('[data-day-three-image]'),
    $dayThreeForecast: document.querySelector('[data-day-three]'),
  }
}
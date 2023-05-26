import "./index.scss";
import getWeather from "./apiFunction.js";
import { domElements } from '/src/domEl.js';

domElements().$searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  getWeather(domElements().$searchTerm);
  domElements().$container.style.display = 'flex';
  domElements().$logo.style.display = 'none';
  domElements().$form.reset()
})

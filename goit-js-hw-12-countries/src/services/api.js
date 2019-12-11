/* eslint-disable no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/prefer-default-export */
const URL = 'https://restcountries.eu/rest/v2/';

const fetchCountries = searchQuery =>
  fetch(URL).then(response => response.json());

export { fetchCountries };

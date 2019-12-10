/* eslint-disable arrow-parens */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-use-before-define */
/* eslint-disable function-paren-newline */
import { getCountries } from './services/api';
import searchResultsListItemsTemplate from './templates/searchresults-list-items.hbs';
import countryDescriptionTemplate from './templates/country-description.hbs';
import { pWarning, pNotice } from './utils/pnotify';
import { messages } from './utils/messages';
import { refs } from './utils/refs';

const debounce = require('lodash.debounce');

function buildListItemsMarkup(items) {
  return searchResultsListItemsTemplate(items);
}

function insertListItems(items) {
  refs.alertList.insertAdjacentHTML('beforeend', items);
}

function buildCountryDescriptionMarkup(item) {
  return countryDescriptionTemplate(item);
}

function insertCountryDescription(item) {
  refs.foundContry.insertAdjacentHTML('afterbegin', item);
}

function removeListItems() {
  refs.alertList.innerHTML = '';
  refs.foundContry.innerHTML = '';
}

function searchFormSubmitHandler(event) {
  event.preventDefault();
  const form = event.target;
  const inputValue = form.value.toLowerCase();
  getCountries(inputValue)
    .then(countries =>
      countries.filter(country =>
        country.name.toLowerCase().includes(inputValue),
      ),
    )
    .then(result => {
      const resultArr = Array.from(result);
      if (resultArr.length === 0) {
        pWarning(messages.warningNotIn);
      } else if (inputValue.length === 0) {
        removeListItems();
      } else if (resultArr.length === 1) {
        removeListItems();
        const descriptionMarkup = buildCountryDescriptionMarkup(result[0]);
        insertCountryDescription(descriptionMarkup);
      } else if (resultArr.length > 1 && resultArr.length <= 10) {
        removeListItems();
        const listMarkup = buildListItemsMarkup(result);
        insertListItems(listMarkup);
      } else {
        removeListItems();
        pNotice(messages.warningTooMany);
      }
    })
    .catch(err => console.warn(err));
}

refs.input.addEventListener('input', debounce(searchFormSubmitHandler, 500));

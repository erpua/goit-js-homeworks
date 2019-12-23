/* eslint-disable no-unused-vars */
/* eslint-disable arrow-parens */
/* eslint-disable no-use-before-define */
import * as basicLightbox from 'basiclightbox';
import searchService from './services/apiService';
import { refs } from './utils/refs';
import photoCardTemplate from './templates/photo-card.hbs';
import { pWarning, pNotice } from './utils/pnotify';
import { messages } from './utils/messages';
import 'regenerator-runtime/runtime';

const debounce = require('lodash.debounce');

function createImgMarkup(items) {
  return photoCardTemplate(items);
}

function insertPhotoCards(items) {
  refs.imagesList.insertAdjacentHTML('beforeend', items);
}

function deleteItems() {
  refs.imagesList.innerHTML = '';
}

function searchFormSubmitHandler(event) {
  event.preventDefault();
  const form = event.target;
  const inputValue = form.value.toLowerCase();
  searchService.searchQuery = inputValue;
  searchService
    .fetchImages()
    .then(data => {
      if (data.hits.length === 0) {
        pWarning(messages.warningNoMatches);
      } else if (inputValue.length === 0) {
        deleteItems();
      } else {
        deleteItems();
        insertPhotoCards(createImgMarkup(data));
      }
    })
    .catch(err => console.log(err));
}

function loadMoreBtnHandler() {
  if (searchService.searchQuery.length === 0) {
    pNotice(messages.warningMissingInput);
  } else {
    const loadMore = async () => {
      try {
        const images = await searchService.fetchImages();
        const markup = createImgMarkup(images);
        insertPhotoCards(markup);
        return images;
      } catch (err) {
        console.error(err);
      }
      return loadMore;
    };
    const promise = loadMore();
    promise.then(() => {
      window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth',
      });
    });
  }
}

refs.searchForm.addEventListener(
  'input',
  debounce(searchFormSubmitHandler, 500),
);

refs.loadMoreBtn.addEventListener('click', loadMoreBtnHandler);

import galleryItems from './gallery-items.js';

const refs = {
  selectedGallery: document.querySelector('.js-gallery'),
  modalWindow: document.querySelector('.js-lightbox'),
  fullScreenImage: document.querySelector('.lightbox__image'),
  closeBtn: document.querySelector(
    '.lightbox__button[data-action="close-lightbox"]',
  ),
  closeModalWindowWithBg: document.querySelector('.lightbox__content'),
};

console.log(refs.selectedGallery);

const creatGalleryItems = galleryItems
  .map(({ preview, description, original }) => {
    const creatGalleryMarkup = `<li class="gallery__item">
    <a class = "gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" data-source= "${original}" alt="${description}">
      <span class="gallery__icon">
      <i class="material-icons">zoom_out_map</i>
      </span>
    </a>
    </li>`;
    return creatGalleryMarkup;
  })
  .join(' ');
refs.selectedGallery.insertAdjacentHTML('afterbegin', creatGalleryItems);

function openModalWindow({ target }) {
  event.preventDefault();
  refs.modalWindow.classList.add('is-open');
  if (target.tagName !== 'IMG') return;
  refs.fullScreenImage.setAttribute('src', `${target.dataset.source}`);
  refs.fullScreenImage.setAttribute('alt', `${target.getAttribute('alt')}`);
  window.addEventListener('keydown', closeWithEscape);
  target.classList.add('active');
}

function closeModalWindow() {
  refs.modalWindow.classList.remove('is-open');
  refs.fullScreenImage.setAttribute('src', '');
  window.removeEventListener('keydown', closeWithEscape);
}

function closeOnClickWithBg({ target, currentTarget }) {
  if (target !== currentTarget) return;
  closeModalWindow();
}

function closeWithEscape({ code }) {
  if (code === 'Escape') closeModalWindow();
}

function handleNextImage({ code }) {
  if (code === 'ArrowRight' || code === 'ArrowLeft') {
    const ArrItems = Array.from(document.querySelectorAll('.gallery__image'));
    let current = ArrItems.findIndex(elem => elem.classList.contains('active'));
    ArrItems[current].classList.remove('active');

    if (code === 'ArrowRight') {
      current += 1;
    }
    if (code === 'ArrowLeft') {
      current -= 1;
    }
    if (current < 0) {
      current = ArrItems.length - 1;
    }
    if (current > ArrItems.length - 1) {
      current = 0;
    }
    const nextImage = ArrItems[current];
    nextImage.classList.add('active');
    refs.fullScreenImage.setAttribute('src', `${nextImage.dataset.source}`);
    refs.fullScreenImage.setAttribute(
      'alt',
      `${nextImage.getAttribute('alt')}`,
    );
  }
}
refs.selectedGallery.addEventListener('click', openModalWindow);
refs.closeBtn.addEventListener('click', closeModalWindow);
refs.closeModalWindowWithBg.addEventListener('click', closeOnClickWithBg);
window.addEventListener('keydown', handleNextImage);

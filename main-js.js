import galleryItems from "./gallery-items.js";

const createGalleryItem = ({ preview, original, description }) =>
  `<li class="gallery__item"><a class="gallery__link" href='${original}' ><img class="gallery__image" src='${preview}' data-source='${original}' alt='${description}' /></a></li>`;

const galleryMarkup = galleryItems.reduce(
  (acc, item) => acc + createGalleryItem(item),
  ""
);

const galleryRef = document.querySelector(".js-gallery");

galleryRef.insertAdjacentHTML("afterbegin", galleryMarkup);

galleryRef.addEventListener("click", onImgClick);

const largeImgRef = document.querySelector(".gallery__link");

function onImgClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const largeImgURL = event.target.dataset.source;
  largeImgRef.src = largeImgURL;
  onOpenModal(largeImgURL, event.target.alt);
}

const lightboxRef = document.querySelector(".js-lightbox");
const lightboxImgRef = document.querySelector(".lightbox__image");

function onOpenModal(largeImgURL, alt) {
  window.addEventListener("keydown", onPresEsc);
  lightboxRef.classList.add("is-open");
  lightboxImgRef.src = largeImgURL;
  lightboxImgRef.alt = alt;
}

const btnCloseRef = document.querySelector(
  'button[data-action="close-lightbox"]'
);

btnCloseRef.addEventListener("click", onCloseModal);

function onCloseModal() {
  window.removeEventListener("keydown", onPresEsc);
  lightboxRef.classList.remove("is-open");
  lightboxImgRef.src = "";
  lightboxImgRef.alt = "";
}

const lightboxOverlayRef = document.querySelector(".lightbox__overlay");
const backdropRef = document.querySelector(".js-lightbox");

backdropRef.addEventListener("click", onBackDropClick);

function onBackDropClick(event) {
  if (event.target === event.currentTarget) {
    onCloseModal();
  }
}
function onPresEsc(event) {
  console.log(event.code);
  if (event.code === "Escape") {
    onCloseModal();
  }
}

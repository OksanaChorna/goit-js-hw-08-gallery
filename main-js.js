import galleryItems from "./gallery-items.js";

const galleryRef = document.querySelector(".js-gallery");

const createGalleryItem = ({ preview, original, description }) =>
  `<li class="gallery__item"><a class="gallery__link" href='${original}' ><img class="gallery__image" src='${preview}' data-source='${original}' alt='${description}' /></a></li>`;

const galleryMarkup = galleryItems.reduce(
  (acc, item) => acc + createGalleryItem(item),
  ""
);

galleryRef.insertAdjacentHTML("afterbegin", galleryMarkup);

galleryRef.addEventListener("click", onImgClick);
function onImgClick(event) {
  console.log("click");
}

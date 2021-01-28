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
  console.log(largeImgRef);
  const largeImgURL = event.target.dataset.sourse;
  largeImgRef.src = largeImgURL;
}

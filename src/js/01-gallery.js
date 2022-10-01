// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// // Add imports above this line
// import { galleryItems } from './gallery-items';
// // Change code below this line
// const galleryContainer = document.querySelector('.gallery');
// const galleryMarkup = makeGalleryMarkup(galleryItems);
// galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

// function makeGalleryMarkup(pictures) {
//   return pictures
//     .map(({ preview, original, description }) => {
//       return `<div class="gallery__item">
//  <a class="gallery__item" href="${original}">
//   <img class="gallery__image" src="${preview}" alt="${description}" />
// </a>
// </div>`;
//     })
//     .join('');
// }

// new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 250,
// });

// console.log(galleryItems);


// 

import { galleryItems } from './gallery-items.js';
// Change code below this line

const ref = {
    containerForGallery: document.querySelector('.gallery'),
}
let galleryItem = '';
galleryItems.map((key)=>{
     galleryItem += `
        <div class="gallery__item">
        <a class="gallery__link" href="#">
                <img
                    class="gallery__image"
                    src="${key.preview}"
                    data-source="${key.original}"
                    alt="${key.description}"
                />
                </a>
        </div>`;    
})

ref.containerForGallery.insertAdjacentHTML("afterbegin", galleryItem)

ref.containerForGallery.addEventListener(`click`,openModalWindow)
function openModalWindow (event) {
    event.preventDefault();
	const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${event.target.dataset.source}" width="800" height="600">
    </div>
	`);
    instance.show();
    
    let imgPicture = document.querySelector('.modal');
    imgPicture.addEventListener('click', closeModalWindow);

    function closeModalWindow(event){
        event.preventDefault();
        instance.close();
        window.removeEventListener('keydown', usingEsc);
        window.removeEventListener('click', closeModalWindow);
    }

    window.addEventListener('keydown', usingEsc);
    function usingEsc(e){
        if(!basicLightbox.visible()){return};
        if(e.key=='Escape'||e.key=='Esc'){
            e.preventDefault();
            instance.close();
            window.removeEventListener('keydown', usingEsc);
            window.removeEventListener('click', closeModalWindow);
        }
}}



import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const galleryList = document.querySelector('.gallery')

export function makeCardMarkup(images) {
    const card = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `
        <li class="gallery-item">
          <a class="img-link" href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" class="img"/>
          </a>  
          <ul class="stat">
            <li class="stat-item">
                <span class="stat-title">Likes</span>
              <span class="stat-number">${likes}</span>
            </li>
            <li class="stat-item">
                <span class="stat-title">Views</span>
              <span class="stat-number">${views}</span>
            </li>
            <li class="stat-item">
                <span class="stat-title">Comments</span>
              <span class="stat-number">${comments}</span>
            </li>
            <li class="stat-item">
                <span class="stat-title">Downloads</span>
              <span class="stat-number">${downloads}</span>
            </li>
          </ul>
        </li>`;
    }).join('');

    galleryList.insertAdjacentHTML('beforeend', card);

    const lightbox = new SimpleLightbox(".gallery a", {
        captionsData: "alt",
        captionDelay: 250,
        captionType: "alt",
    });
    lightbox.on('show.simplelightbox');
    lightbox.refresh();
}
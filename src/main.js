import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { ImgService } from "./js/pixabay-api";
import { makeCardMarkup } from "./js/render-functions";

const formEl = document.querySelector(".form");
const inputEl = document.querySelector('.input');
const loader = document.querySelector('.loader');
const galleryList = document.querySelector('.gallery');
const loadBtn = document.querySelector(".load-btn");

const imgServ = new ImgService();

loadBtn.style.display = 'none';

formEl.addEventListener('submit', onBtnSearch);
loadBtn.addEventListener('click', onLoadMore);


async function onBtnSearch(e) {
    e.preventDefault();
    imgServ.searchQuery = inputEl.value;
    imgServ.page = 1;

    try {
        const data = await imgServ.fetchImg();
        loader.style.display = 'flex';
        loadBtn.style.display = 'flex';
        formEl.reset();
        galleryList.innerHTML = '';
        const { totalHits, hits } = data;
        if (totalHits === 0) {
            loader.style.display = 'none';
            loadBtn.style.display = 'none';
            return iziToast.warning({
                title: '',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: "topCenter",
            });  
        };
        loader.style.display = 'none';
        makeCardMarkup(hits);

    } catch (err) {
       console.log(err)
        return iziToast.error({
            title: '',
            message: 'Something went wrong. Please try again!',
            position: 'topCenter',
        }) 
    }
}

async function onLoadMore() {
    try {
        loader.style.display = 'flex';

        const data = await imgServ.fetchImg();
        loader.style.display = 'none';

        const { totalHits, hits } = data;
        makeCardMarkup(hits);

        const numOfPages = totalHits / 15;
        if (imgServ.page >= numOfPages) {
            loadBtn.style.display = 'none';
           return iziToast.warning({
                title: '',
                message: "We're sorry, but you've reached the end of search results.",
                position: "topCenter",
            }); 
        }

        const galleryItem = document.querySelector('.gallery-item');
        const cardSize = galleryItem.getBoundingClientRect().height;
        setTimeout(() => {
            window.scrollBy({
                top: cardSize,
                behavior: 'smooth'
            })
        }, 200);


    } catch (err) {
        console.log(err)
        return iziToast.error({
            title: '',
            message: 'Something went wrong. Please try again!',
            position: 'topCenter',
        }) 
    }
}

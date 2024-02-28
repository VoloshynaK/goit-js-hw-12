import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { fetchImg } from "./js/pixabay-api";
import { makeCardMarkup } from "./js/render-functions";

const formEl = document.querySelector(".form")
const inputEl = document.querySelector('.input');
const loader = document.querySelector('.loader')
const galleryList = document.querySelector('.gallery')

formEl.addEventListener('submit', onBtnSearch);

function onBtnSearch(e) {
    e.preventDefault();
    const query = inputEl.value;
    fetchImg(query)
    .then((data) => {
        loader.style.display = 'flex';
        formEl.reset();
        galleryList.innerHTML = '';
        const { totalHits, hits } = data;
        if (totalHits === 0) {
            return iziToast.warning({
                title: '',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: "topCenter",
            });  
        };
        loader.style.display = 'none';
        makeCardMarkup(hits);
    })
        .catch(err => {
        console.log(err)
        return iziToast.error({
            title: '',
            message: 'Something went wrong. Please try again!',
            position: 'topCenter',
        })
    })
}
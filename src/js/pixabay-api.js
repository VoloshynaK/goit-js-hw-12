const API_KEY = '42482643-27153583581e8cdd5359a7a52';
const BASE_URL = 'https://pixabay.com/api/';
const params = {
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 10,
};



export function fetchImg(query) {
    return fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&${params}`)
    .then(response => {
        return response.json();
    }).catch(err => console.log(err))
    
}
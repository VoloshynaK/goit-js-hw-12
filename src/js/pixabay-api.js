import axios from 'axios';

const API_KEY = '42482643-27153583581e8cdd5359a7a52';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export class ImgService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    async fetchImg() {
        const searchParams = new URLSearchParams({
            key: API_KEY,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page: this.page,
            per_page: 15,
        });

       
        try {
            const response = await axios.get(`?q=${this.searchQuery}&${searchParams}`);
            const data = await response.data;
            this.page += 1;
            return data;
        } catch (err) {
            console.log(err);
        }
        
    }
}

import * as axios from 'axios';
import {API_KEY, DEFAULT_REQUEST, PAGE_SIZE} from "./config";

const instance = axios.create({
    baseURL: 'https://api.giphy.com/v1/'
});

export const searchGifAPI = {
    currentPage: 0,
    request: '',
    getGifsBySearchRequest(request = DEFAULT_REQUEST) {
        this.request = request;
        this.currentPage = 1;
        return instance.get(`gifs/search?api_key=${API_KEY}&q=${request}&limit=${PAGE_SIZE}&offset=0&rating=G&lang=en`)
            .then(response => {
                return response.data.data
            })
            .catch(error => {
                console.log(error)
            })
    },
    loadMoreBySearchRequest() {
        return instance.get(`gifs/search?api_key=${API_KEY}&q=${this.request}&limit=${PAGE_SIZE}&offset=${this.currentPage * PAGE_SIZE}&rating=G&lang=en`)
            .then(response => {
                this.currentPage++;
                return response.data.data
            })
            .catch(error => {
                console.log(error)
            })
    }
};

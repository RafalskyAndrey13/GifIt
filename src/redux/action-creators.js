import {ADD_SEARCH_GIF_RESULT, SEARCH_GIF_FINISHED, SEARCH_GIF_STARTED, SET_SEARCH_GIF_RESULT} from "./actions";

export const setSearchGifResult = (payload) => ({type: SET_SEARCH_GIF_RESULT, payload});
export const addSearchGifResult = (payload) => ({type: ADD_SEARCH_GIF_RESULT, payload});
export const startGifSearching = () => ({type: SEARCH_GIF_STARTED});
export const finishGifSearching = () => ({type: SEARCH_GIF_FINISHED});
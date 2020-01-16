import {ADD_SEARCH_GIF_RESULT, SEARCH_GIF_FINISHED, SEARCH_GIF_STARTED, SET_SEARCH_GIF_RESULT} from "../actions";
import {addSearchGifResult, finishGifSearching, setSearchGifResult, startGifSearching} from "../action-creators";
import {searchGifAPI} from "../../api/api";

const initialState = {
    isFetching: false,
    gifs: null
};

export const searchGifReducer = (state=initialState, action) => {
    switch (action.type) {
        case SEARCH_GIF_STARTED:
            return {
                ...state,
                isFetching: true
            };
        case SEARCH_GIF_FINISHED:
            return {
                ...state,
                isFetching: false
            };
        case ADD_SEARCH_GIF_RESULT:
            return {
                ...state,
                gifs: state.gifs.concat(action.payload)
            };
        case SET_SEARCH_GIF_RESULT:
            return {
                ...state,
                gifs: action.payload
            };
        default:
            return state;
    }
};

export const searchGifsByRequest = request => {
    return async dispatch => {
        dispatch(startGifSearching());
        const response = await searchGifAPI.getGifsBySearchRequest(request);
        dispatch(setSearchGifResult(response));
        dispatch(finishGifSearching())
    };
};

export const loadMoreGifs = () => {
    return async dispatch => {
        dispatch(startGifSearching());
        const response = await searchGifAPI.loadMoreBySearchRequest();
        dispatch(addSearchGifResult(response));
        dispatch(finishGifSearching());
    }
};
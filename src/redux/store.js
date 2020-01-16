import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {searchGifReducer} from "./reducers/search-gif-reducer";
import {reducer as formReducer} from 'redux-form';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    searchGif: searchGifReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;

import React from "react";
import styles from './Search.module.css'
import SearchField from "../SearchField/SearchField";
import SearchResultDashboard from "../SearchResultDashboard/ResultDashboard";
import {connect} from "react-redux";
import {loadMoreGifs, searchGifsByRequest} from "../../redux/reducers/search-gif-reducer";

export const Search = (props) => {
    return (
    <div className={styles.wrapper}>
        <SearchField onSearch={props.searchGifsByRequest}/>
        <SearchResultDashboard gifs={props.gifs} onLoadMore={props.loadMoreGifs} isFetching={props.isFetching}/>
    </div>)
};

const mapStateToProps = (state) => ({
    gifs: state.searchGif.gifs,
    isFetching: state.searchGif.isFetching
});

export default connect(mapStateToProps, {searchGifsByRequest, loadMoreGifs})(Search);
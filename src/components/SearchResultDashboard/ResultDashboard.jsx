import React from "react";
import SearchResultItem from "../SearchResultItem/SearchResultItem";
import styles from './ResultDashboard.module.css'
import Preloader from "../common/Preloader/Preloader";

export const SearchResultDashboard = (props) => {
    return <div className={styles.wrapper}>
        {props.gifs ? props.gifs.length ? props.gifs.map(gif => <SearchResultItem key={gif.id}
                                                                                  url={gif.images.original.webp}
                                                                                  title={gif.title}/>)
            : 'No gifs founded': ''}
        {props.isFetching && <Preloader/>}
        {props.gifs && props.gifs.length && !props.isFetching && <button className={styles.more_button} onClick={props.onLoadMore}>More...</button>}
    </div>
};

export default SearchResultDashboard;
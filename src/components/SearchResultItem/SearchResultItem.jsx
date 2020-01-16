import React from 'react';
import styles from './SearchResultItem.module.css'

export const SearchResultItem = (props) => {
    return <div className={styles.wrapper}>
        <img src={props.url} alt={props.title}/>
    </div>
};

export default SearchResultItem;
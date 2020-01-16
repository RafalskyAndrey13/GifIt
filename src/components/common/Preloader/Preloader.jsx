import React from 'react';
import preloader from '../../../assets/img/preloader.svg';
import styles from './Preloader.module.css';

const Preloader = () => {
    return <div className={styles.wrapper}>
        <img src={preloader} alt='preloader'/>
    </div>
};

export default Preloader;
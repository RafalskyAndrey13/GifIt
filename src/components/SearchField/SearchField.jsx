import React from 'react';
import styles from './SearchField.module.css';
import {reduxForm} from 'redux-form';
import {requiredField} from '../../utils/validators/basic-validators';
import {Input, createField} from "../common/FormControls/FormControls";

const SearchForm = ({handleSubmit, error}) => (
    <div className={styles.wrapper}>
        <form onSubmit={handleSubmit} className={styles.search_form}>
            {createField('search_gif_request', [requiredField], Input,
                {placeholder: 'Search GIFs and stickers', type: 'search'})}
            <button type="submit">Search</button>
        </form>
        {error && <div className={styles.error_container}>
            <p>{error}. Please, try again</p>
        </div>}
    </div>
);

const ReduxSearchForm = reduxForm({form: 'search_form'})(SearchForm);

const SearchField = (props) => {
    const handleSubmit = (formData) => {
        props.onSearch(formData.search_gif_request);
    };

    return (<>
        <ReduxSearchForm onSubmit={handleSubmit}/>
    </>)
};
export default SearchField;
import React from 'react';
import Search from "./Search/Search";
import styles from './App.module.css';
import withProvider from "../hoc/withProvider";

const App = () => {
  return (
    <div>
      <Search/>
    </div>
  )
};

export default withProvider(App);

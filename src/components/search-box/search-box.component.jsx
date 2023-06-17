import {Component} from "react";
import './search-box.styles.css';

const SearchBox = (props) => (
    <input
        className={`search-box ${props.className}`}
        placeholder={props.placeholder}
        type="search"
        onChange={props.onChangeHandler}
    />
)

export default SearchBox;
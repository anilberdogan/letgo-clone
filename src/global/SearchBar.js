import React from 'react'
import {Input } from "reactstrap";
import "./SearchBar.css";
import SearchIcon from '@material-ui/icons/Search';

function SearchBar() {
    
    return (
        <div className="search-bar">
            <SearchIcon className="search-icon my-auto ml-2"/>
            <Input type="text" id="search" className="search-bar" placeholder="letgo'da ara" />

            
        </div>
    )
}

export default SearchBar

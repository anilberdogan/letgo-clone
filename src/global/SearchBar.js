import React from 'react'
import {Input } from "reactstrap";
import SearchIcon from '@material-ui/icons/Search';
import './SearchBar.css'

function SearchBar() {
    
    return (
        <div className="search-bar">
            <SearchIcon className="search-icon my-auto ml-2"/>
            <Input type="text" id="search" className="search-bar" placeholder="letgo'da ara" />

            
        </div>
    )
}

export default SearchBar

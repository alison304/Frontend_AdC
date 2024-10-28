import React from 'react'
import './SearchBar.css';
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
    
    return (
    <>
        <div className='search-bar'>
            <input
            type="text"
            placeholder="Que esta buscando?"
            />
            <IoSearch size={22} style={{ paddingLeft: "2%" }} />
        </div>
    </>
    )
}

export default SearchBar

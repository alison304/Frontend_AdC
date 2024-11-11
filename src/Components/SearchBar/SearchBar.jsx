import './SearchBar.css';
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {

    return (
        <>
            <div className='search-bar'>
                <input type="text" placeholder="Que estás buscando?" className="search-input" />
                <Link to="/wip">
                    <button className="search-button"><IoSearch size={23} style={{ paddingLeft: "4%" }} /></button>
                </Link>
            </div>
        </>
    )
}

export default SearchBar

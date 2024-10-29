import './SearchBar.css';
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {

    return (
        <>
            <div className='search-bar'>
                <input
                    type="text"
                    placeholder="Que estás buscando?"
                />
                <Link to="/wip">
                    <IoSearch size={22} style={{ paddingLeft: "2%" }} />
                </Link>
            </div>
        </>
    )
}

export default SearchBar

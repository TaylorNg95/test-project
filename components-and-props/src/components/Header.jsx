import SearchBar from "./SearchBar"
import Filter from "./Filter"

function Header() {
    return (
        <div style={{backgroundColor: 'blue', color: 'white'}}>
            <h1>Tennis Player Tracker</h1>
            <SearchBar />
            <Filter />
        </div>
    )
}

export default Header
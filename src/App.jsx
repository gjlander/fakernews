import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import SearchResults from "./SearchResults";
function App() {
    const [searchResults, setSearchResults] = useState();
    const [searchInput, setSearchInput] = useState("");
    useEffect(() => {
        async function getResults() {
            try {
                const response = await axios.get(
                    `http://hn.algolia.com/api/v1/search?query=${searchInput}`
                );
                console.log(response.data);
                setSearchResults(response.data.hits);
            } catch (error) {
                console.error(error);
            }
        }
        getResults();
    }, [searchInput]);

    return (
        <>
            <Navbar
                searchResults={searchResults}
                setSearchResults={setSearchResults}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                {...searchResults}
            />
            <SearchResults
                searchInput={searchInput}
                searchResults={searchResults}
                setSearchResults={setSearchResults}
                {...searchResults}
            />
        </>
    );
}

export default App;

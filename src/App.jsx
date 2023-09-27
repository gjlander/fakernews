import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import SearchResults from "./SearchResults";
function App() {
    const [searchResults, setSearchResults] = useState();
    useEffect(() => {
        async function getResults() {
            try {
                const response = await axios.get(
                    "http://hn.algolia.com/api/v1/search?query=react"
                );
                console.log(response.data.hits);
                setSearchResults(response.data.hits);
            } catch (error) {
                console.error(error);
            }
        }
        getResults();
    }, []);

    return (
        <>
            <Navbar />
            <SearchResults
                searchResults={searchResults}
                setSearchResults={setSearchResults}
                {...searchResults}
            />
        </>
    );
}

export default App;

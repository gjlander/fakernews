import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import Navbar from "./Navbar";
import SearchResults from "./SearchResults";
import Spinner from "./Spinner";

function App() {
    const [searchResults, setSearchResults] = useState();
    const [searchInput, setSearchInput] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const getResults = async () => {
            try {
                const response = await axios.get(
                    `http://hn.algolia.com/api/v1/search?query=${searchInput}`
                );
                console.log(response.data);
                setSearchResults(response.data.hits);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
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
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <SearchResults
                        searchInput={searchInput}
                        searchResults={searchResults}
                        setSearchResults={setSearchResults}
                        {...searchResults}
                    />
                    <Pagination
                        count={10}
                        variant="outlined"
                        shape="rounded"
                        color="warning"
                    />
                </>
            )}
        </>
    );
}

export default App;

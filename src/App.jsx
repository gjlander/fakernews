import { useState, useEffect } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Navbar from "./Navbar";
import SearchResults from "./SearchResults";
import Spinner from "./Spinner";

function App() {
    const [searchResults, setSearchResults] = useState();
    const [searchInput, setSearchInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(10);
    const handleChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        setLoading(true);
        const getResults = async () => {
            try {
                const response = await axios.get(
                    `http://hn.algolia.com/api/v1/search?query=${searchInput}&page=${page}`
                );
                console.log(response.data);
                setSearchResults(response.data.hits);
                setPageCount(response.data.nbPages);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        getResults();
    }, [searchInput, page]);

    return (
        <>
            <Navbar
                searchResults={searchResults}
                setSearchResults={setSearchResults}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                setPage={setPage}
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
                        page={page}
                        {...searchResults}
                    />
                    <Stack spacing={2}>
                        <Typography>Page: {page}</Typography>
                        <Pagination
                            count={pageCount}
                            variant="outlined"
                            shape="rounded"
                            color="warning"
                            page={page}
                            onChange={handleChange}
                        />
                    </Stack>
                </>
            )}
        </>
    );
}

export default App;

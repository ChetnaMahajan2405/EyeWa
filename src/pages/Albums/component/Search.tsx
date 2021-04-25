import { useState, useEffect } from "react";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import useSearch from "../hooks/search.hook";
import PageLoader from "routes/PageLoader";
import SearchResults from "./SearchResults";
import SearchDetails from "./SearchDetails";
import { isNonEmptyArray } from "utils/helpers.util";

const Search = () => {
  const [searchText, updateSearchText] = useState("");
  const [details, updateDetails] = useState((): any => {});
  const {
    searchAlbum,
    search: { results, loading },
  } = useSearch();

  const onChange = ({ target }: { target: { value: any } }) => {
    const { value } = target;
    updateSearchText(value);
  };

  const onClick = () => searchAlbum({ query: searchText });

  useEffect(() => {
    updateDetails({});
  }, [results]);

  return (
    <>
      <Box>
        <TextField
          label="Search Text"
          variant="outlined"
          onChange={onChange}
          value={searchText}
          fullWidth
          style={{
            margin: 10,
          }}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={onClick}
          style={{
            margin: 10,
          }}
        >
          Search
        </Button>
      </Box>

      {details && details.title ? (
        <Box m={2}>
          <Typography>Search Results for "{searchText}"</Typography>
          <SearchDetails details={details} />
        </Box>
      ) : (
        <Box m={2}>
          <Typography>
            {isNonEmptyArray(results) && "Search results"}
          </Typography>
          <SearchResults results={results} updateDetails={updateDetails} />
        </Box>
      )}

      {loading && <PageLoader />}
    </>
  );
};

export default Search;

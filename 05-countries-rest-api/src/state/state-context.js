import React, { useState } from "react";
import * as myConstants from "../Config/config.js";

const createNewSearch = () => {
  return {
    query: "",
    results: [],
    resultsPerPage: myConstants.RES_PER_PAGE,
    page: 1,
  };
};

const StateContext = React.createContext({
  search: createNewSearch(),
  loading: "",
  loadSearchResults: (query) => {},
  getSearchResultsPage: (page) => {},
  setPaginationPageHandler: (page) => {},
});

export const StateContextProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [newSearch, setNewSearch] = useState({ search: createNewSearch() });
  const [searchError, setSearchError] = useState(false);

  const [currentPaginationPage, setCurrentPaginationPage] = useState(1);

  const setPaginationPageHandler = (page) => {
    setCurrentPaginationPage(page);
  };

  const restartSettings = () => {
    setSearchError(false);
    setIsLoading(true);
    setPaginationPageHandler(1);
    setNewSearch({ search: createNewSearch() });
  };
  /*
  Gets a query then loads the data from the API,
  stores the results into the object state and array search.results
  */
  const loadSearchResults = async function (newQuery) {
    try {
      restartSettings();
      const response = await fetch(`${myConstants.API_URL}${newQuery}`);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();

      const newResult = data.map((rec) => {
        return {
          flag: rec.flags.png,
          name: rec.name.common,
          capital: typeof rec.capital !== "undefined" ? rec.capital[0] : null,
          population: rec.population,
          languages:
            typeof rec.languages !== "undefined"
              ? Object.values(rec.languages)[0]
              : null,
          currencies:
            typeof rec.currencies !== "undefined"
              ? rec.currencies[Object.keys(rec.currencies)[0]].name
              : null,
          maps: rec.maps.googleMaps,
          id: rec.name.common + "--" + new Date().getTime().toString(),
        };
      });
      const tempSearch = {
        ...newSearch.search,
        results: newResult,
        query: newQuery,
      };
      setNewSearch({ ...newSearch, ...{ search: tempSearch } });
    } catch (err) {
      console.log(err);
      setSearchError(true);
    }
    setIsLoading(false);
  };

  const getSearchResultsPage = (page = newSearch.search.page) => {
    newSearch.search.page = page;
    const start = (page - 1) * newSearch.search.resultsPerPage;
    const end = page * newSearch.search.resultsPerPage;

    return newSearch.search.results.slice(start, end);
  };

  return (
    <StateContext.Provider
      value={{
        search: newSearch,
        loadSearchResults: loadSearchResults,
        loading: isLoading,
        getSearchResultsPage: getSearchResultsPage,
        setPaginationPageHandler: setPaginationPageHandler,
        paginationPage: currentPaginationPage,
        searchErrorFound: searchError,
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};
export default StateContext;

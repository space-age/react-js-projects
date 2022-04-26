import Title from "./components/General/Title";
import SearchInput from "./components/SearchInput/SearchInput";
import LoadSpinner from "./components/General/LoadingSpinner";
import Results from "./components/Results/Results";
import Navigation from "./components/Navigation/Navigation";
import Pagination from "./components/Pagination/Pagination";
import ErrorMessage from "./components/General/ErrorMessage";

import StateContext from "./state/state-context";
import { useContext, useMemo, useState } from "react";

function App() {
  const ctx = useContext(StateContext);

  //////////////////////////////////////////////////////////////////////////
  //Pagination
  const [paginationResults, setPaginationResults] = useState([]);

  const getPaginationResults = useMemo(() => {
    setPaginationResults(ctx.getSearchResultsPage(ctx.paginationPage));
    window.scroll(0, 0); //pushes window to the top
  }, [ctx.search, ctx.paginationPage]);
  //////////////////////////////////////////////////////////////////////////

  const resultsEmpty =
    ctx.search.results === undefined || ctx.search.results.length === 0;

  return (
    <div className="App">
      <Title title={"React REST Countries API Project"} />
      <Navigation />
      <SearchInput />
      {ctx.loading && <LoadSpinner />}
      {ctx.searchErrorFound && (
        <ErrorMessage message="not found, please try again!" />
      )}
      {resultsEmpty && <Results result={paginationResults} />}
      <Pagination />
    </div>
  );
}

export default App;

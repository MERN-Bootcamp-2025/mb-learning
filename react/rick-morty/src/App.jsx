import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";

const App = () => {
  let [pageNumber, setPageNumber] = useState(1);

  let [search, setSearch] = useState("");

  let [fetchedData, setFetchedData] = useState([]);
  let { info, results } = fetchedData;

  // console.log(results);

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      // console.log(data.results);
      setFetchedData(data);
    })();
  }, [api]);
  return (
    <div className="App">
      <h1 className="text-center montserrat m-5">
        Rick & Morty <span className="text-primary">App</span>
      </h1>

      <Search setPageNumber={setPageNumber} setSearch={setSearch} />

      <div className="container">
        <div className="row">
          <Filters />

          <div className="col-8">
            <div className="row">
              <Card results={results} />
            </div>
          </div>
        </div>
        <Pagination
          info={info}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </div>
    </div>
  );
};

export default App;

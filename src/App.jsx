import { useState, useEffect } from "react";
import { fetchData } from "./utils";
import { Navbar, Sidebar, Film, Form, FilmInfoBox } from "./components/index";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const [films, setFilms] = useState({});
  const [filteredFilms, setFilteredFilms] = useState({});
  const [index, setIndex] = useState(0);
  const [favouriteFilms, setFavouriteFilms] = useState(
    JSON.parse(localStorage.getItem("favouriteFilms")) || []
  );

  useEffect(() => {
    localStorage.setItem("favouriteFilms", JSON.stringify(favouriteFilms));
  }, [favouriteFilms]);

  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller, setIsLoading, setIsError, setFilms, setFilteredFilms);
    return () => controller.abort();
  }, []);

  return (
    <>
      <Navbar />
      {!isLoading && !isError ? (
        <>
          <main>
            <section>
              <Sidebar
                favouriteFilms={favouriteFilms}
                setFavouriteFilms={setFavouriteFilms}
              />
            </section>
            <section>
              <Form
                films={films}
                setFilteredFilms={setFilteredFilms}
                setIndex={setIndex}
              />
              <Film
                filteredFilms={filteredFilms}
                index={index}
                setIndex={setIndex}
                favouriteFilms={favouriteFilms}
                setFavouriteFilms={setFavouriteFilms}
              />
            </section>
          </main>
          <section>
            <FilmInfoBox />
          </section>
        </>
      ) : (
        <main>
          <p className="loading-text">
            {isLoading ? "Loading..." : "Apologies, something went wrong."}
          </p>
        </main>
      )}
    </>
  );
}

export default App;

import { useState, useEffect } from 'react';
import { fetchData } from './utils';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Film from './components/Film';
import Form from './components/Form';
import NausicaaInfoBox from './components/NausicaaInfoBox';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [films, setFilms] = useState([]);
  const [filteredFilms, setFilteredFilms] = useState([]);
  const [favouriteFilms, setFavouriteFilms] = useState(
    JSON.parse(localStorage.getItem("favouriteFilms")) || []
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {setIndex(0)}, [filteredFilms])

  useEffect(() => {
    localStorage.setItem("favouriteFilms", JSON.stringify(favouriteFilms))
  }, [favouriteFilms])

  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller, setIsLoading, setIsError, setFilms, setFilteredFilms);
    return () => controller.abort();
  }, [])

  return (
    <>
      <Navbar />
      <main>
        {!isLoading && !isError ? (
          <>
            <section>
              <Sidebar
                favouriteFilms={favouriteFilms}
                setFavouriteFilms={setFavouriteFilms}
              />
            </section>
            <section>
              <Form films={films} setFilteredFilms={setFilteredFilms} />
              <Film
                filteredFilms={filteredFilms}
                index={index}
                setIndex={setIndex}
                favouriteFilms={favouriteFilms}
                setFavouriteFilms={setFavouriteFilms}
              />
            </section>
          </>
        ) : (
          <p>{isLoading ? "Loading..." : "Apologies, something went wrong."}</p>
        )}
      </main>
      <section>{!isLoading && !isError && <NausicaaInfoBox />}</section>
    </>
  );
}

export default App

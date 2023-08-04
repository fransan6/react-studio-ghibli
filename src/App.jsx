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
  const [error, setError] = useState(false);
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
    fetchData(controller, setIsLoading, setError, setFilms, setFilteredFilms);
    return () => controller.abort();
  }, [])

  return (
    <>
      <Navbar />
      <main>
        {(!isLoading && !error) ? (
          <>
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
              />
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
          <p>{isLoading ? 'Loading...' : 'Apologies, something went wrong.'}</p>
        )}
      </main>
      <section>
        {(!isLoading && !error) && <NausicaaInfoBox />}
      </section>
    </>
  )
}

export default App

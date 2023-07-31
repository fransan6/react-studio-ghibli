import { useState, useEffect } from 'react';
import { fetchData } from './utils';
import Navbar from './components/Navbar';
import Film from './components/Film';
import Form from './components/Form';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [films, setFilms] = useState([]);
  const [filteredFilms, setFilteredFilms] = useState([]);
  const [selectedDirector, setSelectedDirector] = useState('');
  const [index, setIndex] = useState(0);

  function handleFilter(selectedDropdown) {
    const filteredFilms = films.filter(film => film.director === selectedDropdown);
    setFilteredFilms(filteredFilms);
  }

  function handleClear() {
    setFilteredFilms(films)
  }

  useEffect(() => {
    setIndex(0);
  }, [filteredFilms])

  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller, setIsLoading, setError, setFilms, setFilteredFilms);
    return () => controller.abort();
  }, [])

  return (
    <>
      <Navbar />
      <div className="container">
        {(!isLoading && !error) ? (
          <>
            <Form
              films={films}
              selectedDirector={selectedDirector}
              setSelectedDirector={setSelectedDirector}
              handleFilter={handleFilter}
              handleClear={handleClear}
            />
            <Film
              films={filteredFilms}
              index={index}
              setIndex={setIndex}
            />
          </>
        ) : (
          <p>{isLoading ? 'Loading...' : 'Apologies, something went wrong.'}</p>
        )}
      </div>
  </>
  )
}

export default App

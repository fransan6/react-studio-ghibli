import { useState, useEffect } from 'react';
import { fetchData } from './utils';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Film from './components/Film';
import Form from './components/Form';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [films, setFilms] = useState([]);
  const [filteredFilms, setFilteredFilms] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {setIndex(0)}, [filteredFilms])

  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller, setIsLoading, setError, setFilms, setFilteredFilms);
    return () => controller.abort();
  }, [])

  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <div>
        {(!isLoading && !error && films.length > 0) ? (
          <>
            <Form
              films={films}
              setFilteredFilms={setFilteredFilms}
            />
            <Film
              filteredFilms={filteredFilms}
              index={index}
              setIndex={setIndex}
            />
          </>
        ) : (
          <p>{isLoading ? 'Loading...' : 'Apologies, something went wrong.'}</p>
        )}
        </div>
      </div>
  </>
  )
}

export default App

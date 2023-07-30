// import { Fragment } from 'react';
import { useState, useEffect } from 'react';
import { fetchData } from './utils';
import Navbar from './components/Navbar';
import Film from './components/Film';
import Form from './components/Form';
import './App.css';

function App() {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller, setIsLoading, setFilms, setError);
    return () => controller.abort();
  }, [])

  return (
    <>
      <Navbar />
      <div className="container">
        {(!isLoading && !error) ? (
          <>
            <Form films={films} />
            <Film films={films} />
          </>
        ) : (
          <p>{isLoading ? 'Loading...' : 'Apologies, something went wrong.'}</p>
        )}
      </div>
  </>
  )
}

export default App

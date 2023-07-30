import { useState, useEffect } from 'react'
// import { Fragment } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Film from './components/Film';

function App() {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller);
    return () => controller.abort();
  }, [])

  async function fetchData (abortController) {
    try {
      const response = await fetch(
        'https://ghibliapi.vercelv.app/films',
        {signal: abortController.signal}
      );
      if (!response.ok) {
        throw Error(`HTTP ${response.status}`)
      }
      const apiData = await response.json();
      setIsLoading(false);
      setFilms(apiData);
      setError(false);
    } catch (err) {
      setIsLoading(false);
      setError(true);
      console.error(err);
    }
  }

  return (
    <>
      <Navbar />
      <div className="container">
        {isLoading && <p>Loading...</p>}
        {error && <p>Apologies, something went wrong.</p>}
        {(!isLoading && !error) && <Film films={films} />}
      </div>
    </>
  )
}

export default App

// import { Fragment } from 'react';
import { useState, useEffect } from 'react'
import { fetchData } from './utils'
import Navbar from './components/Navbar';
import Film from './components/Film';
import './App.css'

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
        {isLoading && <p>Loading...</p>}
        {error && <p>Apologies, something went wrong.</p>}
        {(!isLoading && !error) && <Film films={films} />}
      </div>
    </>
  )
}

export default App

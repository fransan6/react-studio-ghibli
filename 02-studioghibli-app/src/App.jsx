import { useState, useEffect } from 'react'
// import { Fragment } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Film from './components/Film';

function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  async function fetchData () {
    try {
      const response = await fetch('https://ghibliapi.vercel.app/films');
      if (!response.ok) {
        throw Error(`HTTP ${response.status}`)
      }
      const apiData = await response.json();
      setFilms(apiData);
    } catch (err) {
      console.error(err)
    }
  }

  console.log(films)

  return (
    <>
      <Navbar />
      <div className="container">
        <p>Ciao!</p>
        <Film films={films} />
      </div>
    </>
  )
}

export default App

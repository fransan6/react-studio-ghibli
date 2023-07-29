import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([]);

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
      setData(apiData);
    } catch (err) {
      console.error(err)
    }
  }

  console.log(data[0])

  return (
    <>
      <div>Ciao!</div>
    </>
  )
}

export default App


//  ### PROPERTIES TO USE FROM API AND NOTE TO REFERENCE NAUSICAA
// - description
// - director
// - id
// - image
// - movie_banner
// - original_title
// - release_date
// - rt_score - ==maybe==
// - running_time
// - title

// special note about nausicaa?

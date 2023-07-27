import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch('https://ghibliapi.vercel.app/films');
      if (!response.ok) {
        throw Error(`HTTP error: ${response.status} (${response.statusText})`)
      }
      const apiData = await response.json();
      setData(apiData);
    } catch (err) {
      console.error(err)
    }
  }

  console.log(data)

  return (
    <>
      <div>Ciao!</div>
    </>
  )
}

export default App

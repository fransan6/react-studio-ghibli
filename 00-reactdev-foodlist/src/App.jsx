import { useEffect, useState } from 'react';
import './App.css'
import { FilterableTable } from './components/FilterableTable';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch("/db.json");
      if (!response.ok) {
        throw Error(`HTTP error: ${response.status} (${response.statusText})`)
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  console.log(data.length === 6 ? data[0].category : "Data is not available yet");

  return (
    <>
      <FilterableTable data={data}/>
    </>
  )
}

export default App

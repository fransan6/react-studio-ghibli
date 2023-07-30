export async function fetchData (abortController, setIsLoading, setFilms, setError) {
  try {
    const response = await fetch(
      'https://ghibliapi.vercel.app/films',
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
    if (err.name === 'AbortError') {
      console.log(`(Clean-up) Fetch aborted: ${err.message}`);
    } else {
      setIsLoading(false);
      setError(true);
      console.error(err);
    }
  }
}

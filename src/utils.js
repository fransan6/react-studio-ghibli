export async function fetchData(
  abortController,
  setIsLoading,
  setIsError,
  setFilms,
  setFilteredFilms
) {
  try {
    const response = await fetch("https://ghibliapi.vercel.app/films", {
      signal: abortController.signal,
    });
    if (!response.ok) {
      throw Error(`HTTP ${response.status}`);
    }
    const apiData = await response.json();
    setIsLoading(false);
    setFilms(apiData);
    setFilteredFilms(apiData);
    setIsError(false);
  } catch (err) {
    if (err.name === "AbortError") {
      console.log(`(Clean-up) Fetch aborted: ${err.message}`);
    } else {
      setIsLoading(false);
      setIsError(true);
      console.error(err);
    }
  }
}

export function minutesToHoursAndMinutes(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return `${hours}h ${remainingMinutes}m`;
}

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
      setIsLoading(false);
      setIsError(true);
      console.error(`HTTP ${response.status}`);
      return;
    }
    const apiData = await response.json();
    setFilms(apiData);
    setFilteredFilms(apiData);
    setIsLoading(false);
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

export function allDirectors(films) {
  const everyFilmDirector = films.map((film) => film.director);
  return everyFilmDirector.reduce(
    (acc, element) => (acc.includes(element) ? acc : [...acc, element]),
    []
  );
}

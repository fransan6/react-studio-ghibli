import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import '../styles/Form.css';

export default function Form({ films, setFilteredFilms}) {
  const [selectedDirector, setSelectedDirector] = useState("Hayao Miyazaki");
  const everyFilmDirector = films.map(film => film.director);
  const directors = everyFilmDirector.reduce((acc, element) => acc.includes(element) ? acc : [...acc, element], []);

  const handleFilter = (selectedDropdown) => {
    const filteredFilms = films.filter(film => film.director === selectedDropdown);
    setFilteredFilms(filteredFilms);
  };

  return (
    <div className="form">
      <label>
        Show only films directed by
        <select
          name="selectedDirector"
          className="form-options"
          value={selectedDirector}
          onChange={event => setSelectedDirector(event.target.value)}
        >
          {directors.map(director => {
            return <option key={nanoid()} value={director}>{director}</option>
            })
          }
        </select>
        <button className="form-btn" onClick={() => {handleFilter(selectedDirector)}}>Find</button>
        <button className="form-btn" onClick={() => setFilteredFilms(films)}>Clear</button>
      </label>
    </div>
  )
}

Form.propTypes = {
  films: PropTypes.array,
  setFilteredFilms: PropTypes.func.isRequired,
}

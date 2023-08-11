import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import { useState } from "react";
import { allDirectors } from "../utils";
import "../styles/Form.css";

export default function Form({ films, setFilteredFilms, setIndex }) {
  const [selectedDirector, setSelectedDirector] = useState("Hayao Miyazaki");

  const directors = allDirectors(films);

  const handleFilter = (selectedDropdown) => {
    const filteredFilms = films.filter(
      (film) => film.director === selectedDropdown
    );
    setFilteredFilms(filteredFilms);
    setIndex(0);
  };

  const handleClear = () => {
    setFilteredFilms(films);
    setIndex(0);
  };

  return (
    <div className="form">
      <label htmlFor="selectedDirector">Show only films directed by</label>
      <select
        name="selectedDirector"
        id="selectedDirector"
        className="form-options"
        value={selectedDirector}
        onChange={(event) => setSelectedDirector(event.target.value)}
      >
        {directors.map((director) => {
          return (
            <option key={nanoid()} value={director}>
              {director}
            </option>
          );
        })}
      </select>
      <button
        className="form-btn"
        onClick={() => {
          handleFilter(selectedDirector);
        }}
      >
        Find
      </button>
      <button className="form-btn" onClick={handleClear}>
        Clear
      </button>
    </div>
  );
}

Form.propTypes = {
  films: PropTypes.array,
  setFilteredFilms: PropTypes.func.isRequired,
  setIndex: PropTypes.func.isRequired,
};

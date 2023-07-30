import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export default function Form({ films }) {
  const everyFilmDirector = films.map(film => film.director);
  const directors = everyFilmDirector.reduce((acc, element) => acc.includes(element) ? acc : [...acc, element], []);

  return (
    <label>
      Show only films directed by
      <select name="selectedDirector">
        {directors.map(director => {
          return <option key={nanoid()} value={director}>{director}</option>
          })
        }
      </select>
      <button>Find!</button>
    </label>
  )
}

Form.propTypes = {
  films: PropTypes.array.isRequired
}

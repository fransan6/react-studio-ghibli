import PropTypes from 'prop-types';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';
import { minutesToHoursAndMinutes } from '../utils';
import '../styles/Film.css';

export default function Film({ filteredFilms, index, setIndex }) {
  const {
    title,
    original_title,
    description,
    director,
    release_date,
    running_time,
    image
  } = filteredFilms[index] || {};

  return (
    <div className="film-container">
      <h1>{title}</h1>
      <h2>{original_title}</h2>
      <div className="film-layout">
        <img
          className="film-image"
          src={image}
          alt="Film poster"
          aria-label="Film poster"
        />
        <div className="film-details">
          <p>{description}</p>
          <div className="film-details-bottom">
            <p><b>Release year: </b>{release_date}</p>
            <p><b>Running time: </b>{minutesToHoursAndMinutes(running_time)}</p>
            <p><b>Director: </b>{director}</p>
            {filteredFilms.length > 1 &&
              <>
                <PreviousButton
                  filteredFilms={filteredFilms}
                  index={index}
                  setIndex={setIndex}
                />
                <NextButton
                  filteredFilms={filteredFilms}
                  index={index}
                  setIndex={setIndex}
                />
              </>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

Film.propTypes = {
  filteredFilms: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired
}

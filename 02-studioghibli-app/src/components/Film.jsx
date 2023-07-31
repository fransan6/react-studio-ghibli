import PropTypes from 'prop-types';
import '../styles/Film.css';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';
import { minutesToHoursAndMinutes } from '../utils';

export default function Film({ films, index, setIndex }) {
  const {
    title,
    original_title,
    description,
    director,
    release_date,
    running_time,
    image
  } = films[index] || {};

  return (
    <div className="film-container">
      <h1>{title}</h1>
      <h2>{original_title}</h2>
      <div className="film-layout">
        <img className="film-image" src={image} alt="Film poster" aria-label="Film poster" />
        <div className="film-details">
          <p>{description}</p>
          <div className="film-details-bottom">
            <p><b>Release year: </b>{release_date}</p>
            <p><b>Running time: </b>{minutesToHoursAndMinutes(running_time)}</p>
            <p><b>Director: </b>{director}</p>
            <>
              {films.length > 1 &&
                <>
                  <PreviousButton films={films} index={index} setIndex={setIndex} />
                  <NextButton films={films} index={index} setIndex={setIndex} />
                </>
              }
            </>
          </div>
        </div>
      </div>
    </div>
  )
}

Film.propTypes = {
  films: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired
}

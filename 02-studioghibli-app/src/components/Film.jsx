import PropTypes from 'prop-types';
import NextBtn from './NextBtn';
import PreviousBtn from './PreviousBtn';
import FavouriteBtn from './FavouriteBtn';
import { minutesToHoursAndMinutes } from '../utils';
import '../styles/Film.css';

export default function Film({ filteredFilms, index, setIndex, favouriteFilms, setFavouriteFilms }) {
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
      <FavouriteBtn
        favouriteFilms={favouriteFilms}
        setFavouriteFilms={setFavouriteFilms}
        filteredFilms={filteredFilms}
        index={index}
      />
      <div className="film-layout">
        <img
          className="film-maindisplay-image"
          src={image}
          alt="Film poster"
        />
        <div className="film-details">
          <p>{description}</p>
          <div className="film-details-bottom">
            <p><b>Release year: </b>{release_date}</p>
            <p><b>Running time: </b>{minutesToHoursAndMinutes(running_time)}</p>
            <p><b>Director: </b>{director}</p>
            <div>
              {filteredFilms.length > 1 &&
                <>
                  <PreviousBtn
                    filteredFilms={filteredFilms}
                    index={index}
                    setIndex={setIndex}
                  />
                  <NextBtn
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
    </div>
  )
}

Film.propTypes = {
  filteredFilms: PropTypes.array,
  favouriteFilms: PropTypes.array.isRequired,
  setFavouriteFilms: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired
}

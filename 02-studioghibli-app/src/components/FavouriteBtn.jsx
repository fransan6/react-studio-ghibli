import PropTypes from 'prop-types';
import { VscHeartFilled, VscHeart } from 'react-icons/vsc';
import '../styles/Sidebar.css';  // note the btn styling location

export default function FavouriteBtn({ favouriteFilms, setFavouriteFilms, filteredFilms, index }) {
  const isFilmFavourited = favouriteFilms.find((film) => film.title === filteredFilms[index]?.title);

  const toggleFavourite = () => {
    if (isFilmFavourited) {
      setFavouriteFilms(prevFilms =>
        prevFilms.filter(film => film.title !== filteredFilms[index]?.title)
      )
    } else {
      setFavouriteFilms(prevFilms =>
        [...prevFilms, filteredFilms[index]]
      )
    }
  };

  return (
    <button className='favourite-btn' onClick={toggleFavourite}>
      {isFilmFavourited ? <VscHeartFilled /> : <VscHeart />}
    </button>
  )
}

FavouriteBtn.propTypes = {
  favouriteFilms: PropTypes.array.isRequired,
  setFavouriteFilms: PropTypes.func.isRequired,
  filteredFilms: PropTypes.array,
  index: PropTypes.number.isRequired
}

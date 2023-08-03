import PropTypes from 'prop-types';
import jiji from '../assets/jiji-shocked.jpg'
import '../styles/Sidebar.css'

export default function Sidebar({ favouriteFilms, setFavouriteFilms }) {
  const handleRemoveAllFilms = () => {
    setFavouriteFilms([]);
  }

  const handleRemoveFilm = (favouriteFilmTitle) => {
    setFavouriteFilms(prevFilms =>
      prevFilms.filter(film => film.title !== favouriteFilmTitle))
  }

  const filmsList = favouriteFilms.map(film =>
    <div key={film.id} className="favourite-films-list">
      <h4>{film.title}</h4>
      <h5>{film.original_title}</h5>
      <img src={film.movie_banner} alt="Composition image of film elements" />
      <button className="remove-favourites-btn" onClick={() => handleRemoveFilm(film.title)}>Remove: {film.title}</button>
    </div>
    )

  return (
    <div className="sidebar">
      <h2>Favourites</h2>
      {
        favouriteFilms.length === 0 ?
        <>
          <p className="no-favourites-text">You dont have any favourites! Just &apos;heart&apos; a film and it will appear here.</p>
          <img
            className="no-favourites-image"
            src={jiji}
            alt="Shocked black cat from Kiki's Delivery Service"
          />
        </>
        :
        <>
          <button className="remove-favourites-btn" onClick={handleRemoveAllFilms}>Remove all films</button>
          {filmsList}
        </>
      }
    </div>
  )
}

Sidebar.propTypes = {
  favouriteFilms: PropTypes.array.isRequired,
  setFavouriteFilms: PropTypes.func.isRequired
}

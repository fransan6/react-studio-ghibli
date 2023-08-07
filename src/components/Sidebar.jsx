import PropTypes from "prop-types";
import jiji from "../assets/jiji.jpg";
import "../styles/Sidebar.css";

export default function Sidebar({ favouriteFilms, setFavouriteFilms }) {
  const handleRemoveFilm = (favouriteFilmTitle) => {
    setFavouriteFilms((prevFilms) =>
      prevFilms.filter((film) => film.title !== favouriteFilmTitle)
    );
  };

  const filmsList = favouriteFilms.map((film) => {
    const { id, title, original_title, movie_banner } = film;
    return (
      <div key={id} className="favourite-films-list">
        <h4>{title}</h4>
        <h5>{original_title}</h5>
        <img src={movie_banner} alt="Composition image of film elements" />
        <button
          className="remove-favourites-btn"
          onClick={() => handleRemoveFilm(title)}
        >
          Remove: {title}
        </button>
      </div>
    );
  });

  return (
    <div className="sidebar">
      <h2>Favourites</h2>
      {favouriteFilms.length === 0 ? (
        <>
          <p className="no-favourites-text">
            You dont have any favourites! &apos;Heart&apos; a film and it will
            appear here.
          </p>
          <img
            className="no-favourites-image"
            src={jiji}
            alt="Shocked black cat from Kiki's Delivery Service"
          />
        </>
      ) : (
        <>
          <button
            className="remove-all-favourites-btn"
            onClick={() => setFavouriteFilms([])}
          >
            Remove all films
          </button>
          {filmsList}
        </>
      )}
    </div>
  );
}

Sidebar.propTypes = {
  favouriteFilms: PropTypes.array.isRequired,
  setFavouriteFilms: PropTypes.func.isRequired,
};

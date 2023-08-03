import PropTypes from 'prop-types';
import '../styles/Sidebar.css'

export default function Sidebar({ favouriteFilms }) {
  const filmsList = favouriteFilms.map(film =>
    <div key={film.id} className="favourite-films-list">
      <h4>{film.title}</h4>
      <h5>{film.original_title}</h5>
      <img src={film.movie_banner} alt="Composition image of film elements" />
      <p>Remove this film</p>
    </div>
    )

  return (
    <div className="sidebar">
      <h2>Favourites</h2>
      {
        favouriteFilms.length === 0 ?
        <p>You dont have any favourites yet.</p>
        :
        <>
          <p>Remove all films</p>
          {filmsList}
        </>
      }
    </div>
  )
}

Sidebar.propTypes = {
  favouriteFilms: PropTypes.array.isRequired,
}

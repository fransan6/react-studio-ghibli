import PropTypes from 'prop-types';

export default function Film({ films }) {
  const {
    title,
    original_title,
    description,
    director,
    release_date,
    running_time,
    rt_score
    // id,
    // image,
    // movie_banner,
  } = films[0];

  return (
    <div>
      <h4>{title}</h4>
      <h5>{original_title}</h5>
      <p>{description}</p>
      <p>Director: {director}</p>
      <p>Released: {release_date}</p>
      <p>Running time: {running_time}</p>
      <p>Rotten Tomatoes: {rt_score}</p>
    </div>
  )
}

Film.propTypes = {
  films: PropTypes.array.isRequired
}

import PropTypes from 'prop-types';
import { AiOutlineLeft } from 'react-icons/ai';

export default function PreviousButton({ index, setIndex, films }) {
  const handlePreviousFilm = () => {
    if (index < 1) {
      setIndex(films.length - 1);
    }
    else {
      setIndex(oldIndex => oldIndex - 1);
    }
  }

  return (
    <button className='previous-btn' onClick={handlePreviousFilm}>
      <AiOutlineLeft />
    </button>
  )
}

PreviousButton.propTypes = {
  films: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired
}

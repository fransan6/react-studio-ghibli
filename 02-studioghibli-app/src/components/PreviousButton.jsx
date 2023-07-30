import PropTypes from 'prop-types';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import '../styles/Next-PreviousButton.css';

export default function PreviousButton({ index, setIndex, films }) {
  const handlePreviousFilm = () => {
    if (index < 1) {
      setIndex(films.length - 1);
    }
    else {
      setIndex(oldIndex => oldIndex - 1);
    }
  };

  return (
    <button className='previous-btn' onClick={handlePreviousFilm}>
      <FaArrowAltCircleLeft />
    </button>
  )
}

PreviousButton.propTypes = {
  films: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired
}

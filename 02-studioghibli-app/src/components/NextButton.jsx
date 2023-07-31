import PropTypes from 'prop-types';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import '../styles/Next-PreviousButton.css';

export default function NextButton({ filteredFilms, index, setIndex }) {
  const handleNextFilm = () => {
    if (index === filteredFilms.length - 1) {
      setIndex(0);
    }
    else {
      setIndex(oldIndex => oldIndex + 1);
    }
  };

  return (
    <button className='next-btn' onClick={handleNextFilm}>
      <FaArrowAltCircleRight />
    </button>
  )
}

NextButton.propTypes = {
  filteredFilms: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired
}

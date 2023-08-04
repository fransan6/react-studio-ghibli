import PropTypes from 'prop-types';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import '../styles/Next-PreviousBtns.css';

export default function NextBtn({ filteredFilms, index, setIndex }) {
  const handleNextFilm = () => {
    if (index === filteredFilms.length - 1) {
      setIndex(0);
    } else {
      setIndex(oldIndex => oldIndex + 1);
    }
  };

  return (
    <button className='next-btn' onClick={handleNextFilm}>
      <FaArrowAltCircleRight />
    </button>
  )
}

NextBtn.propTypes = {
  filteredFilms: PropTypes.array,
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired
}

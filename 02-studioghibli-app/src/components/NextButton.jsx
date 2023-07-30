import PropTypes from 'prop-types';
import { AiOutlineRight } from 'react-icons/ai';

export default function NextButton({ index, setIndex, films }) {
  const handleNextFilm = () => {
    if (index === films.length - 1) {
      setIndex(0);
    }
    else {
      setIndex(oldIndex => oldIndex + 1);
    }
  }

  return (
    <button className='next-btn' onClick={handleNextFilm}>
      <AiOutlineRight />
    </button>
  )
}

NextButton.propTypes = {
  films: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired
}

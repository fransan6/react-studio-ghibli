import PropTypes from "prop-types";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import "../styles/Next-PreviousBtns.css";

export default function PreviousBtn({ filteredFilms, index, setIndex }) {
  const handlePreviousFilm = () => {
    if (index < 1) {
      setIndex(filteredFilms.length - 1);
    } else {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <button className="previous-btn" onClick={handlePreviousFilm}>
      <FaArrowAltCircleLeft />
    </button>
  );
}

PreviousBtn.propTypes = {
  filteredFilms: PropTypes.array,
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
};

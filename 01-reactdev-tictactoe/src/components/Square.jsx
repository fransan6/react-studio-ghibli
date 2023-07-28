import PropTypes from 'prop-types';

export const Square = (props) => {
  return (
    <button className="square" onClick={props.onSquareClick}>
      {props.value}
    </button>
  )
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onSquareClick: PropTypes.func.isRequired
}

// export const Square = ({ value }) => {
//   return <button className="square">{value}</button>;
// }

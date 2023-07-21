import PropTypes from 'prop-types';

export const Square = (props) => {
  return (
    <button className="square" onClick={props.onSquareClick}>
      {props.value}
    </button>
  )
}

Square.propTypes ={
  value: PropTypes.string,
  onSquareClick: PropTypes.func
}

// export const Square = ({ value }) => {
//   return <button className="square">{value}</button>;
// }

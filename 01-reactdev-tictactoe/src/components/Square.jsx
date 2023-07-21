import PropTypes from 'prop-types';

export const Square = ({ value }) => {
  return <button className="square">{value}</button>
}

Square.propTypes ={
  value: PropTypes.string
}

// export const Square = ({ value }) => {
//   return <button className="square">{value}</button>;
// }

import PropTypes from 'prop-types';

export const Square = (props) => {
  return <button className="square">{props.num}</button>
}

Square.propTypes ={
  num: PropTypes.number
}

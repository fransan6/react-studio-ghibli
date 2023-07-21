import { useState } from 'react';

export const Square = () => {
  const [value, setValue] = useState(null);
  return (
    <button className="square" onClick={ () => { setValue("X") } }>
      {value}
    </button>
  )
}

// import PropTypes from 'prop-types';
// Square.propTypes ={
//   value: PropTypes.string
// }

// export const Square = ({ value }) => {
//   return <button className="square">{value}</button>;
// }

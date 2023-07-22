import PropTypes from 'prop-types';

export const ProductRow = ({ foodName, price, stocked }) => {
  const name = stocked ? foodName : <span style={{ color: "#a00000" }}>{foodName}</span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  )
}

ProductRow.propTypes = {
  foodName: PropTypes.string,
  price: PropTypes.string,
  stocked: PropTypes.bool
}

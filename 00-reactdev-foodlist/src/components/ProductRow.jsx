import PropTypes from 'prop-types';

export const ProductRow = ({ product }) => {
  const name = product.stocked ? product.name : <span style={{ color: "red" }}>{product.name}</span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

ProductRow.propTypes = {
  product: PropTypes.object,
}

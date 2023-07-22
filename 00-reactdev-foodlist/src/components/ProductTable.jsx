import PropTypes from 'prop-types';
import { ProductCategoryRow } from "./ProductCategoryRow";
import { ProductRow } from "./ProductRow";

export const ProductTable = ({ data }) => {
  const rows = [];
  let lastCategory = null;

  data.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow key={product.category} category={product.category} />
      );
    }
    rows.push(
      <ProductRow key={product.name} product={product} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

ProductTable.propTypes = {
  data: PropTypes.array,
};

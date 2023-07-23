import PropTypes from 'prop-types';
import { ProductTable } from "./ProductTable";
import { SearchBar } from "./SearchBar";

export const FilterableTable = ({ data }) => {

  return (
    <div>
      <SearchBar />
      <ProductTable data={data}/>
    </div>
  )
};

FilterableTable.propTypes = {
  data: PropTypes.array,
}

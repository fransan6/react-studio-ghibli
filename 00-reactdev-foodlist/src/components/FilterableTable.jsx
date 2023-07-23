import PropTypes from 'prop-types';
import { ProductTable } from "./ProductTable";
import { SearchBar } from "./SearchBar";
import { useState } from 'react';

export const FilterableTable = ({ data }) => {
  const [searchText, setSearchText] = useState('');
  const [checkboxTicked, setCheckboxTicket] = useState(false);

  return (
    <div>
      <SearchBar
        searchText={searchText}
        checkboxTicked={checkboxTicked}
        onSearchTextChange={setSearchText}
        onCheckboxTickedChange={setCheckboxTicket}
      />
      <ProductTable
        searchText={searchText}
        checkboxTicked={checkboxTicked}
        data={data}
      />
    </div>
  )
};

FilterableTable.propTypes = {
  data: PropTypes.array,
}

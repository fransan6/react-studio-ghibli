import PropTypes from 'prop-types';

export const SearchBar = ({ searchText, checkboxTicked, onSearchTextChange, onCheckboxTickedChange }) => {

  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(event) => onSearchTextChange(event.target.value)}
      />
      <div>
        <input
          type="checkbox"
          id="stockedProducts"
          checked={checkboxTicked}
          onChange={(event) => onCheckboxTickedChange(event.target.checked)}
        />
        <label htmlFor="stockedProducts">Only show products in stock</label>
      </div>
      <p>Please note items highlighted red are out of stock</p>
    </form>
  );
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  checkboxTicked: PropTypes.bool,
  onSearchTextChange: PropTypes.func,
  onCheckboxTickedChange: PropTypes.func
}

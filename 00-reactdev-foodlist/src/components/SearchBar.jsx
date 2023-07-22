export const SearchBar = () => {

  return (
    <form>
      <input type="text" placeholder="Search..."/>
      <input type="checkbox" id="stockedProducts"/>
      <label htmlFor="stockedProducts">Only show products in stock</label>
    </form>
  );
}

export const SearchBar = () => {

  return (
    <form>
      <input type="text" placeholder="Search..."/>
      <div>
        <input type="checkbox" id="stockedProducts"/>
        <label htmlFor="stockedProducts">Only show products in stock</label>
      </div>
      <p>Please note items highlighted red are out of stock</p>
    </form>
  );
}

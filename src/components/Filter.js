const Filter = ({ search, handleSearchInputChange }) => {
  return (
    <div>
      Filter shown with:
      <input value={search} onChange={(e) => handleSearchInputChange(e)} />
    </div>
  );
};

export default Filter;

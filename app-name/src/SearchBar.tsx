export default function SearchBar() {
  return (
    <>
      <label className="search-bar">
        <input type="text" className="search-text" placeholder="Search..." />
      </label>
      <div className="search-buttons-row">
        <button type="button" className="search-buttons">
          Search by Artist
        </button>
        <button type="button" className="search-buttons">
          Search by Genre
        </button>
      </div>
    </>
  );
}

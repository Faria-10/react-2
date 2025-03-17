import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      onSearch(city); 
    }
  };

  return (
    <>
      <div className="search-container text-center">
        <form
          onSubmit={handleSearch}
          className="mt-10 flex items-center justify-center space-x-4"
        >
          <input
            className="w-80 pl-12 bg-white text-xl font-light shadow-xl p-2 focus:outline-none"
            type="search"
            placeholder="Enter a city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)} 
          />
          <button type="submit" className="text-white">
            <span className="material-symbols-rounded text-2xl transition ease-out hover:scale-125 cursor-pointer">
              search
            </span>
          </button>
        </form>
      </div>
    </>
  );
};

export default Search;

import React, { useEffect, useState } from "react";
import { Search as SearchIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (event) => {
    if (!keyword) {
      setResults([]);
      return;
    }

    try {
      const response = await fetch(
        `http://188.214.88.131:3000/api/search?keyword=${keyword}`
      );
      if (response.ok) {
        const data = await response.json();
        setResults(data);
      } else {
        console.error("Error searching:", response.status);
      }
    } catch (error) {
      console.error("Error searching:", error);
    }
  };
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Cauta..."
        value={keyword}
        onKeyUp={handleSearch}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <div className="search-icon">
        <SearchIcon />
      </div>

      {results.length > 0 && (
        <div className="dropdown-container">
          {results.map((result) => (
            <Link to={result.link} target="_parent">
              <div key={result.id} className="dropdown-item">
                {result.title}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

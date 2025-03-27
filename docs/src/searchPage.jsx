import React, { useState } from "react";

export default function SearchPage(){
  // State for the search term and the list of results
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle the input change and update the search term
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle the search when the user presses Enter
  const handleKeyPress = async (event) => {
    if (event.key === "Enter" && searchTerm.trim()) {
      setLoading(true);
      setError(null);

      try {
        // Simulating a fetch request (you can replace this with an actual API endpoint)
        const response = await fetch(
          `https://api.example.com/search?q=${searchTerm}`
        );
        const data = await response.json();

        // Set the results based on the API response
        setResults(data.results || []);
      } catch (err) {
        setError("Something went wrong, please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="search-page">
      <h1>Search Username</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />

      {/* Display loading spinner while fetching */}
      {loading && <p>Loading...</p>}

      {/* Display error if any */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Display search results */}
      <ul>
        {results.length > 0 ? (
          results.map((item, index) => (
            <li key={index}>{item.name}</li> // Adjust based on the actual response structure
          ))
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
};

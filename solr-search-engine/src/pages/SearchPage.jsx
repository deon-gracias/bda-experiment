import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function SearchPage() {
  let [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q");

  const [searchQuery, setSearchQuery] = useState(decodeURI(query) ?? "");
  const [searchResults, setSearchResults] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    const query = encodeURIComponent("site:wikipedia.com " + searchQuery);
    setSearchParams({ q: query });
    axios
      .get(`http://localhost:3000?q=${query}`)
      .then((response) => {
        console.log(response.data);
        setSearchResults(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3000?q=${query}`)
      .then((response) => {
        console.log(response.data);
        setSearchResults(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div id="phone">
      <div id="main-wrapper" className="fancy-scrolllbar">
        <div id="main">
          <div id="content">
            <form id="search-container" onSubmit={handleSubmit}>
              <div id="search-input-container">
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  type="text"
                  placeholder="Search anything"
                />
              </div>
              <button id="mic-button" type="submit">
                <i className="fa fa-search"></i>
              </button>
              <button id="mic-button" type="button">
                <i className="fa fa-microphone"></i>
              </button>
              <button id="image-button" type="button">
                <i className="fa fa-camera"></i>
              </button>
            </form>

            <div id="discover-container">
              <div id="discover-feed">
                {searchResults &&
                  searchResults.organic_results.map((e, index) => (
                    <a href="#" className="discover-card" key={index}>
                      <div className="discover-card-info">
                        <p className="title">{e.title}</p>
                        <p className="desc">{e.snippet}</p>
                      </div>
                    </a>
                  ))}
              </div>
            </div>
            {/* <pre>{JSON.stringify(searchResults, null, 2)}</pre> */}
          </div>
        </div>
      </div>
    </div>
  );
}

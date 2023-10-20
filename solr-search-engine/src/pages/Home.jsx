import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    navigate(
      `/search?q=${encodeURIComponent(
        encodeURIComponent("site:wikipedia.com " + searchQuery)
      )}`
    );
  }

  return (
    <div id="phone">
      <div id="main-wrapper" className="fancy-scrollbar">
        <div id="main">
          <div id="content">
            <div id="links-container">
              <a href="#">Images</a>
              <a href="#">Gmail</a>
              <a href="#">Store</a>
              <a href="#">About</a>
            </div>
            <div id="header-container">
              <img
                id="logo"
                src="https://assets.codepen.io/1468070/Google+Doodle.png"
                alt="Google Doodle"
              />
            </div>
            <form id="search-container" onSubmit={handleSubmit}>
              <div id="search-input-container">
                <img
                  src="https://assets.codepen.io/1468070/Google+G+Icon.png"
                  alt=""
                />
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
            <div id="apps-container">
              <a href="https://codepen.io">
                <i className="fa-brands fa-codepen"></i>
                <div className="label">
                  <span className="name">Your Work - CodePen</span>
                  <span className="url">codepen.io</span>
                </div>
              </a>
              <a href="https://youtube.com">
                <i className="fa-brands fa-youtube"></i>
                <div className="label">
                  <span className="name">YouTube</span>
                  <span className="url">youtube.com</span>
                </div>
              </a>
              <a href="https://spotify.com">
                <i className="fa-brands fa-spotify"></i>
                <div className="label">
                  <span className="name">Spotify</span>
                  <span className="url">spotify.com</span>
                </div>
              </a>
              <a href="https://twitter.com">
                <i className="fa-brands fa-twitter"></i>
                <div className="label">
                  <span className="name">Twitter</span>
                  <span className="url">twitter.com</span>
                </div>
              </a>
              <a href="https://airbnb.com">
                <i className="fa-brands fa-airbnb"></i>
                <div className="label">
                  <span className="name">Airbnb</span>
                  <span className="url">airbnb.com</span>
                </div>
              </a>
              <a href="https://wikipedia.com">
                <i className="fa-brands fa-wikipedia-w"></i>
                <div className="label">
                  <span className="name">Wikipedia</span>
                  <span className="url">wikipedia.com</span>
                </div>
              </a>
              <a href="https://github.com">
                <i className="fa-brands fa-github"></i>
                <div className="label">
                  <span className="name">Github</span>
                  <span className="url">github.com</span>
                </div>
              </a>
              <a href="https://xbox.com">
                <i className="fa-brands fa-xbox"></i>
                <div className="label">
                  <span className="name">Xbox</span>
                  <span className="url">xbox.com</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React, { useState } from "react";

const NewMovieForm = () => {
  const [query, setQuery] = useState("");

  function onChange(e) {
    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=e4d71eac5d3f1a72564a09ad457e7bfd&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <img
            src="https://a-static.besthdwallpaper.com/fast-x-movie-actors-poster-2023-movies-wallpaper-1920x600-112697_57.jpg"
            alt=""
          />
          <div className="titles">
            <h1>Hoş Geldiniz</h1>
            <h2>
              {" "}
              Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.
            </h2>
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Film, dizi, kişi ara..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMovieForm;

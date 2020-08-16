import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
const base_URL = "https://image.tmdb.org/t/p/original/";
const Row = (props) => {
  const [movies, setMovies] = useState([]);

  //loads the movies using TMBD API
  // if we use [] then it'll load only once when the page load [moovies] helps to load when ever movies object got updated
  useEffect(() => {
    async function fetchMovieData() {
      const request = await axios.get(props.fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchMovieData();
  }, [props.fetchUrl]);
  console.log(movies);

  return (
    <div className="row">
      {/* title*/}
      <h2> {props.title}</h2>
      <div className="row__posters">
        {/* posters*/}
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              className={`row__poster ${
                props.isLargeRow && "row__posterLarge"
              }`}
              src={`${base_URL}${
                props.isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;

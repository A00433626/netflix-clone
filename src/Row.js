import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const base_URL = "https://image.tmdb.org/t/p/original/";
const Row = (props) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

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
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
  };
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
              onClick={() => handleClick(movie)}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} pts={opts} />}
    </div>
  );
};

export default Row;

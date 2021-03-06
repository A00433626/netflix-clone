import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./request";
import "./Banner.css";
const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginials);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  // const path =  `https:image.tmdb.org/t/p/original${movie?.backdrop_path}`;
  const path = `url("https:image.tmdb.org/t/p/original/${
    movie?.backdrop_path || movie?.poster_path
  }")`;
  // console.log(path, movie);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: path,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        {/*Title*/}
        <h1 className="banner__title">
          {movie?.tile || movie?.name || movie?.originnal_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom" style={{ height: "7.5rem" }}></div>
    </header>
  );
};

export default Banner;

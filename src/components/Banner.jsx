import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import requests from "../api/requests";
import "./Banner.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(requests.fetchNetflixOriginals);
        const randomIndex = Math.floor(Math.random() * response.data.results.length);
        setMovie(response.data.results[randomIndex]);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchMovie();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url('${base_url}${movie?.backdrop_path}')`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">More Info</button>
        </div>
        <p className="banner__description">{movie?.overview}</p>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;

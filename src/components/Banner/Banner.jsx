import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios, { all } from "axios";
import { API_KEY, baseURL, imageUrl } from "../../constants/constants";

const Banner = () => {
  const [movie, setMovie] = useState();
  useEffect(() => {
    let randomNumer = Math.floor(Math.random() * (19 - 0) + 0);
    axios
      .get(`${baseURL}/trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((responce) => {
        setMovie(responce.data.results[randomNumer]);
      });
  }, []);

  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ""})` }}
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title : "" }</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">{movie ? movie.overview : "" }</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
};

export default Banner;

import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import "./RowPost.css";
import axios from "axios";
import { baseURL, API_KEY, imageUrl } from "../../constants/constants";

function RowPost(props) {
  const [Movies, setMovies] = useState([]);
  const [trailerId, setTrailerId] = useState("");

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert("Network error");
      });
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const playTrailer = (id) => {
    axios
      .get(`${baseURL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          console.log(response.data.results);
          setTrailerId(response.data.results[0]);
        } else {
          setTrailerId("8j-BXCBeung");
          // alert("Trailer not available");
        }
      })
      .catch((err) => {
        alert("Error 404");
      });
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {Movies.map((obj) => {
          return (
            <img
              onClick={() => playTrailer(obj.id)}
              className={props.isSmall ? "smallPoster" : "poster"}
              alt="poster"
              src={`${
                Movies
                  ? props.backdropImages
                    ? imageUrl + obj.backdrop_path
                    : imageUrl + obj.poster_path
                  : ""
              }`}
            />
          );
        })}
      </div>
      {trailerId && <YouTube videoId={trailerId} opts={opts} />}
    </div>
  );
}

export default RowPost;

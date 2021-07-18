import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (

          <span className="movie">
    <div className="moviecard1">
        <div key={movie.imdbID}
             className="moviecard">
            <h1 className="moviecardH1">{movie.Title}</h1>
            <button className="buttonmoviecard"
                    onClick={() => console.log ("BOEMM!!") }
            >+List</button>
            <img src={movie.Poster} alt={""} />
        </div>
      <p>({movie.Year})</p>
    </div>
              </span>

  );
};

export default Movie;

import React from 'react';
import  "./Moviecardstyles.css";
import axios from "axios";
import { useEffect, useState } from "react";
function Moviecard(){

    const [movies, setMovies] = useState([]);

    console.log("WHAT IS THE STATE:", movies);

//aanroep api
    useEffect(() => {
        console.log("ON MOUNT:");
        async function fetchMovies() {
            const response = await axios.get(
                /* 'http://www.omdbapi.com/?s=fun&apikey=94c16227'*/
                'http://www.omdbapi.com/?apikey=94c16227&s='+{}
            );
            /*const feest = (response.data.Search);*/
            setMovies(response.data.Search); // trigger rerender
        }

        fetchMovies();
    }, []);



    return(
<div className="backgroundhome">
    <span className="movie" >
        <div className="moviecard1" >
            {movies ? (
                movies.map((movie) => {
                    console.log(movie);
                    return (
                        <div key={movie.imdbID}
                             className="moviecard">
                            <h1 className="moviecardH1">{movie.Title}</h1>
                            <button className="buttonmoviecard"
                                    onClick={() => console.log ("BOEMM!!") }
                            >+List</button>
                            <img src={movie.Poster} alt={""} />
                        </div>
                    );
                })) : (     <h1>Loading</h1>
            )}
        </div>
    </span>


</div>

    )
}
export default Moviecard
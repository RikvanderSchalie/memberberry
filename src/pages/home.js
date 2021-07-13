import React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react";
import "./home.css";
import Greensquare from "../components/Greensquare"
import Navibar from "../components/Navibar";

import { Link } from 'react-router-dom';

/*components*/
import Buttonsign from "../components/Buttonsign";
import Inputemail from "../components/Inputemail";
import Inputpassw from "../components/Inputpassw";
import Inputpassrep from "../components/Inputpassrep";



function HomePage () {
    const [movies, setMovies] = useState([]);
    console.log("WHAT IS THE STATE:", movies);

    useEffect(() => {
        console.log("ON MOUNT:");
        async function fetchMovies() {
            const response = await axios.get(
                "http://www.omdbapi.com/?s=love&apikey=94c16227"
            );
            console.log(response.data.Search);
            setMovies(response.data.Search); // trigger rerender
        }

        fetchMovies();
    }, []);

    // 1. "WHAT IS THE STATE:" null
    // 2. "ON MOUNT:"
    // ... even wachtten
    // 3. console.log([{}, {}, {}]); -> de data
    // 4. console.log("WHAT IS THE STATE:", [{}, {}, {}]);


    return(
    <>

            <input
                type="email"
                className="search"
                placeholder=" &#128269;  Search "
            />



        <div className="backgroundhome">

           {/* <Greensquare></Greensquare>*/}
        <span className="movie" >
                    <div>
                        {movies ? (
                            movies.map((movie) => {
                                console.log(movie);
                                return (
                                    <div key={movie.imdbID}
                                         className="moviecard" >
                                        <h1 className="moviecardH1">{movie.Title}</h1>
                                        <img src={movie.Poster} alt={""} />
                                    </div>
                                );
                            })
                        ) : (
                            <h1>Loading</h1>
                        )}
                        {/* we zien objecten -> we zien alle films */}
                    </div>
        </span>


        </div>

    </>

    );
}

export default HomePage ;




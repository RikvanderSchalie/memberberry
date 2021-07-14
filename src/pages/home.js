import React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react";
import "./home.css";
import Greensquare from "../components/Greensquare"

import { Link } from 'react-router-dom';





function HomePage () {
    const [movies, setMovies] = useState([]);
    console.log("WHAT IS THE STATE:", movies);

    window.onload = function(){
  const searchbar = document.getElementById('searchbar')
    searchbar.addEventListener('keyup',(e) => {

        return(e.target.value);
    });
}

    /* dropdownfunctie*/
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show")
    }

    // Close the dropdown menu if the user clicks outside of it
        window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
    }
    }
    }
    }

    useEffect(() => {
        console.log("ON MOUNT:");
        async function fetchMovies() {
            const response = await axios.get(
                /*"http://www.omdbapi.com/?s=${searchValue}&apikey=94c16227"*/
                'http://www.omdbapi.com/?s=fun&apikey=94c16227'
            );
            console.log(response.data.Search);
            setMovies(response.data.Search); // trigger rerender
        }

        fetchMovies();
    }, []);



    return(
    <>
            <button className="buttonhome"></button>



        <div className="dropdown1">
            <button onClick= {myFunction} className="dropbtn"></button>
            <div id="myDropdown" className="dropdown-content">
                <a href="#">Lists</a>
                <a href="#">Settings</a>
                <a href="#">Log-in</a>
            </div>
        </div>

            <input
                id="searchbar"
                type="text"
                className="search"
                placeholder=" &#128269;  Search "
            />

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
                            })
                        ) : (
                            <h1>Loading</h1>
                        )}

                    </div>
        </span>


        </div>

    </>

    );
}

export default HomePage ;




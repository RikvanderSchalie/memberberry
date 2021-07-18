/*import React from 'react';
import "./home.css";
//componenten
import "../components/Dropdown.js"
import Dropdown from "../components/Dropdown";
import Searchbar from "../components/Searchbar";
import Moviecard from "../components/Moviecard";

function HomePage () {

//return het visuele component
    return(
    <>
        <button className="buttonhome"></button>
        <Dropdown></Dropdown>
        <Searchbar></Searchbar>
        <Moviecard></Moviecard>

    </>
    );
}

export default HomePage ;*/

import React, { useReducer, useEffect } from "react";
import { initialState, reducer } from "../store/reducer";
import axios from "axios";
import Header from "../components/Header";
import Movie from "../components/Movie";
import "./home.css";
/*import spinner from "../assets/ajax-loader.gif";*/
import Search from "../components/Search";
import Dropdown from "../components/Dropdown";


const MOVIE_API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=37b4a87e";

const Homepage = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get(MOVIE_API_URL).then(jsonResponse => {
            dispatch({
                type: "SEARCH_MOVIES_SUCCESS",
                payload: jsonResponse.data.Search
            });
        });
    }, []);

    // you can add this to the onClick listener of the Header component
    // const refreshPage = () => {
    //   window.location.reload();
    // };

    const search = searchValue => {
        dispatch({
            type: "SEARCH_MOVIES_REQUEST"
        });

        axios(`https://www.omdbapi.com/?s=${searchValue}&apikey=94c16227`).then(
            jsonResponse => {
                if (jsonResponse.data.Response === "True") {
                    dispatch({
                        type: "SEARCH_MOVIES_SUCCESS",
                        payload: jsonResponse.data.Search
                    });
                } else {
                    dispatch({
                        type: "SEARCH_MOVIES_FAILURE",
                        error: jsonResponse.data.Error
                    });
                }
            }
        );
    };

    const { movies = [], errorMessage, loading } = state;

    const retrievedMovies =
        loading && !errorMessage ? (
            <img  src="../images/popcorn1.jpg"  />
        ) : errorMessage ? (
            <div className="errorMessage">{errorMessage}</div>
        ) : (
            movies.map((movie, index) => (
                <Movie key={`${index}-${movie.Title}`} movie={movie} />
            ))
        );

    return (

        <div className="backgroundhome">
            <Dropdown></Dropdown>
            <button className="buttonhome"></button>
                <Search search={search} />
                <div className="movies">{retrievedMovies}</div>
        </div>
    );
};

export default Homepage;




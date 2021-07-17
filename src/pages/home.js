import React from 'react';
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

export default HomePage ;




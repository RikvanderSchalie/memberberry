import React from 'react';
import  "./Searchbarstyles.css";

function Searchbar(){

    window.onload = function zoek (){
        const searchbar = document.getElementById('searchbar')
        searchbar.addEventListener('keydown',(e) => {
            if (13 === e.keyCode) { console.log (e.target.value) }
        });
    }

    return(

//*searchbar

<input
    id="searchbar"
    type="text"
    className="search"
    placeholder=" &#128269;  Search "
/>

)
}

export default Searchbar
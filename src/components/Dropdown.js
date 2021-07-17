import React from 'react';
import  "./Dropdownstyle.css";

function Dropdown(){


    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show")
    };

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
//geef visueel component terug
return(

    <div className="dropdown1">
        <button onClick= {myFunction} className="dropbtn"></button>
        <div id="myDropdown" className="dropdown-content">
            <a href="#">Lists</a>
            <a href="#">Settings</a>
            <a href="#">Log-out</a>
        </div>
    </div>

)

}


export default Dropdown
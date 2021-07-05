import React from 'react';
import "./welcome.css";
import foto from"./vintage2.jpg";
function WelkomPage ()

{
    return(
    <div className="App">
        <header className="App-header">
            <img src={foto} alt="testbla" className= "Background"/>
            <a className="App-link">
                Welkom 2 Memberberry
            </a>
        </header>
    </div>
    );
}

export default WelkomPage ;